# Examples

Real-world usage examples for security research and code analysis.

!!! note "Command Usage"
    Run from source using `python scanipy.py`.

## Security Research

### Command Injection

Find potential command injection vulnerabilities:

```bash
python scanipy.py --query "os.system" --language python \
  --keywords "user,input,request" --run-semgrep \
  --api-url http://localhost:8000 --s3-bucket scanipy-results
```

### SQL Injection

Find potential SQL injection:

```bash
python scanipy.py --query "execute(" --language python \
  --keywords "format,user,%s" --run-semgrep \
  --api-url http://localhost:8000 --s3-bucket scanipy-results
```

### Unsafe Deserialization

Find unsafe pickle usage:

```bash
python scanipy.py --query "pickle.loads" --language python --run-semgrep \
  --api-url http://localhost:8000 --s3-bucket scanipy-results
```

### Path Traversal (Tarslip)

Find path traversal vulnerabilities in archive extraction:

```bash
python scanipy.py --query "extractall" --language python \
  --run-semgrep --rules ./tools/semgrep/rules/tarslip.yaml \
  --api-url http://localhost:8000 --s3-bucket scanipy-results
```

With CodeQL for deeper analysis:

```bash
python scanipy.py --query "extractall" --language python --run-codeql \
  --codeql-queries "codeql/python-queries:Security/CWE-022/TarSlip.ql"
```

### Hardcoded Secrets

Find potential hardcoded credentials:

```bash
python scanipy.py --query "password =" --language python \
  --keywords "secret,api_key,token" --run-semgrep \
  --api-url http://localhost:8000 --s3-bucket scanipy-results
```

## Code Pattern Analysis

### Deprecated API Usage

Find deprecated urllib2 usage:

```bash
python scanipy.py --query "urllib2" --language python
```

### Library Usage

Find specific library usage in popular repos:

```bash
python scanipy.py --query "import tensorflow" --language python \
  --search-strategy tiered
```

### Recently Updated

Find recently updated repos using a pattern:

```bash
python scanipy.py --query "FastAPI" --language python --sort-by updated
```

## Advanced Filtering

### Exclude Organizations

Search but exclude specific organizations:

```bash
python scanipy.py --query "eval(" \
  --additional-params "stars:>1000 -org:microsoft -org:google"
```

### High-Star Repos Only

Focus on very popular repositories:

```bash
python scanipy.py --query "subprocess.Popen" --language python \
  --additional-params "stars:>10000"
```

### Combined Filters

```bash
python scanipy.py \
  --query "subprocess" \
  --language python \
  --keywords "shell=True,user" \
  --pages 10 \
  --search-strategy tiered \
  --run-semgrep \
  --api-url http://localhost:8000 --s3-bucket scanipy-results
```

## Workflow Examples

### Research Workflow

1. **Search and save results:**
   ```bash
   python scanipy.py --query "extractall" --language python \
     --output tarslip_repos.json
   ```

2. **Review results, then run analysis:**
   ```bash
   python scanipy.py --query "extractall" \
     --input-file tarslip_repos.json \
     --run-semgrep --rules ./tools/semgrep/rules/tarslip.yaml \
     --api-url http://localhost:8000 --s3-bucket scanipy-results
   ```

3. **Run CodeQL for deeper analysis:**
   ```bash
   python scanipy.py --query "extractall" --language python \
     --input-file tarslip_repos.json \
     --run-codeql --codeql-output-dir ./tarslip_sarif
   ```

### Long-Running Analysis

For large-scale analysis with resume capability:

```bash
# Start analysis (can be interrupted)
python scanipy.py --query "eval(" --language python \
  --pages 10 \
  --run-semgrep \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results
```

### Multi-Tool Analysis

Run both Semgrep and CodeQL on the same repositories:

```bash
# First, search and save results
python scanipy.py --query "extractall" --language python \
  --output repos.json

# Run Semgrep on those repos (via API)
python scanipy.py --query "extractall" --language python \
  --input-file repos.json \
  --run-semgrep \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results

# Run CodeQL on the same repos
python scanipy.py --query "extractall" --language python \
  --input-file repos.json \
  --run-codeql \
  --codeql-output-dir ./sarif_results
```

## Language-Specific Examples

### JavaScript/TypeScript

```bash
python scanipy.py --query "eval(" --language javascript --run-codeql
```

### Java

```bash
python scanipy.py --query "Runtime.exec" --language java --run-codeql
```

### Go

```bash
python scanipy.py --query "os/exec" --language go --run-codeql
```

### C/C++

```bash
python scanipy.py --query "strcpy" --language c --run-codeql \
  --codeql-queries "cpp-security-extended"
```

## Resuming Interrupted Analysis

Both Semgrep and CodeQL support resuming interrupted analysis. This is useful for large scans that may be interrupted.

### Resume Semgrep Analysis

```bash
# Run Semgrep analysis (results stored in API service database)
python scanipy.py --query "SQL injection" --language python \
  --run-semgrep \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results
```

### Resume CodeQL Analysis

```bash
# Start CodeQL analysis with database tracking
python scanipy.py --query "path traversal" --language python \
  --run-codeql --codeql-results-db path_analysis.db

# Resume interrupted analysis
python scanipy.py --query "path traversal" --language python \
  --run-codeql --codeql-results-db path_analysis.db --codeql-resume
```

### Large-Scale Analysis Workflow

For analyzing hundreds of repositories:

```bash
# Day 1: Start large scan (100+ repos)
python scanipy.py --query "unsafe deserialization" --language java \
  --pages 10 --run-codeql --codeql-results-db deserialization_scan.db

# Analysis interrupted after 40 repositories...

# Day 2: Resume (skips first 40, continues with remaining)
python scanipy.py --query "unsafe deserialization" --language java \
  --pages 10 --run-codeql --codeql-results-db deserialization_scan.db \
  --codeql-resume

# Completed: All 100 repositories analyzed
```

### Key Points

- **Session Matching**: Resume works by matching query, language, and analysis parameters
- **Automatic Skipping**: Already-analyzed repositories are automatically skipped
- **Incremental Saves**: Results are saved after each repository
- **Crash Recovery**: Analysis survives Ctrl+C, network errors, or system crashes

## Containerized Execution (Semgrep via API)

For large-scale parallel analysis, Semgrep runs via the API service, which orchestrates Kubernetes Jobs:

### Basic Semgrep Analysis

```bash
# Run Semgrep analysis (API orchestrates Kubernetes jobs)
python scanipy.py --query "extractall" --language python --run-semgrep \
  --api-url http://scanipy-api:8000 \
  --s3-bucket scanipy-results
```

### High-Throughput Analysis

Run analysis on many repositories in parallel:

```bash
# Analyze 50+ repositories with 20 parallel jobs
python scanipy.py --query "pickle.loads" --language python \
  --pages 10 \
  --run-semgrep \
  --api-url http://scanipy-api:8000 \
  --s3-bucket scanipy-results \
  --k8s-namespace scanipy \
  --max-parallel-jobs 20 \
  --rules ./tools/semgrep/rules/tarslip.yaml
```

### Production Deployment Workflow

1. **Deploy API service**:
   ```bash
   kubectl apply -f k8s/api-service.yaml
   kubectl apply -f k8s/rbac.yaml
   kubectl apply -f k8s/configmap.yaml
   ```

2. **Run analysis from CLI**:
   ```bash
   python scanipy.py --query "SQL injection" --language python \
     --run-semgrep \
     --api-url http://scanipy-api.scanipy.svc.cluster.local:8000 \
     --s3-bucket scanipy-results \
     --max-parallel-jobs 30
   ```

3. **Monitor progress**:
   ```bash
   # Check Kubernetes jobs
   kubectl get jobs -n scanipy
   
   # View API logs
   kubectl logs -n scanipy deployment/scanipy-api
   
   # Check worker logs
   kubectl logs -n scanipy job/semgrep-1-repo-name-abc123
   ```

### Benefits

- **Parallel Execution**: Multiple repositories analyzed simultaneously
- **Scalability**: Leverage entire Kubernetes cluster
- **Isolation**: Each scan runs in isolated container
- **Resilience**: Failed jobs don't affect others
- **Production-Ready**: Designed for EKS/GKE/AKS deployment
