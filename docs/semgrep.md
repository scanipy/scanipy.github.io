# Semgrep Integration

Scanipy can automatically clone and scan the top 10 repositories with [Semgrep](https://semgrep.dev/) for security vulnerabilities.

!!! note "Command Usage"
    Run from source using `python scanipy.py`.

## Prerequisites

1. **Semgrep API service** running
2. **S3 bucket** for storing analysis results
3. **Kubernetes cluster** (for running analysis jobs)

## Basic Usage

```bash
# Run Semgrep analysis (requires --api-url and --s3-bucket)
python scanipy.py --query "extractall" --run-semgrep \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results
```

## Custom Rules

```bash
# Use custom Semgrep rules
python scanipy.py --query "extractall" --run-semgrep \
  --rules ./my_rules.yaml \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results

# Use built-in tarslip rules
python scanipy.py --query "extractall" --run-semgrep \
  --rules ./tools/semgrep/rules/tarslip.yaml \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results
```

## Semgrep Pro

If you have a Semgrep Pro license:

```bash
python scanipy.py --query "extractall" --run-semgrep --pro \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results
```

## Additional Semgrep Arguments

Pass additional arguments directly to Semgrep:

```bash
python scanipy.py --query "extractall" --run-semgrep \
  --semgrep-args "--severity ERROR --json" \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results
```

## Containerized Execution (Kubernetes)

Scanipy uses containerized execution via Kubernetes Jobs for parallel analysis across multiple repositories. All Semgrep analysis runs through the API service.

### Prerequisites

1. **Kubernetes cluster** (EKS, GKE, AKS, or local with k3d/kind)
2. **Semgrep API service** running in the cluster
3. **Worker container image** built and available
4. **S3 bucket** for storing results (or S3-compatible storage)

### Basic Usage

```bash
# Run Semgrep analysis (always uses containerized execution)
python scanipy.py --query "extractall" --run-semgrep \
  --api-url http://scanipy-api:8000 \
  --s3-bucket scanipy-results
```

### Configuration Options

```bash
# Full example with all options
python scanipy.py --query "extractall" --run-semgrep \
  --api-url http://scanipy-api:8000 \
  --s3-bucket scanipy-results \
  --k8s-namespace scanipy \
  --max-parallel-jobs 20 \
  --rules ./custom-rules.yaml \
  --pro
```

### Architecture

When using `--run-semgrep`:

1. **CLI** creates a scan session via API service
2. **API Service** creates Kubernetes Jobs (one per repository) up to `--max-parallel-jobs` limit
3. **Worker Containers** (one per Job) execute in parallel:
   - Clone the repository
   - Run Semgrep analysis
   - Upload results to S3
   - Report status back to API service
4. **CLI** polls API service for completion and fetches final results

### Benefits

- **Parallel Execution**: Multiple repositories scanned simultaneously
- **Scalability**: Leverage Kubernetes cluster resources
- **Isolation**: Each scan runs in its own container
- **Resilience**: Failed jobs don't affect others
- **Production-Ready**: Designed for EKS deployment
- Monitoring and troubleshooting

## Built-in Rules

Scanipy includes built-in security rules:

### Tarslip Rules

Detect path traversal vulnerabilities in archive extraction:

```bash
python scanipy.py --query "extractall" --run-semgrep \
  --rules ./tools/semgrep/rules/tarslip.yaml \
  --api-url http://localhost:8000 \
  --s3-bucket scanipy-results
```

## Semgrep Options Reference

| Option | Description |
|--------|-------------|
| `--run-semgrep` | Enable Semgrep analysis (requires `--api-url` and `--s3-bucket`) |
| `--rules` | Path to custom Semgrep rules |
| `--pro` | Use Semgrep Pro |
| `--semgrep-args` | Additional Semgrep CLI arguments |
| `--api-url` | Semgrep API service URL (required for `--run-semgrep`) |
| `--s3-bucket` | S3 bucket for storing results (required for `--run-semgrep`) |
| `--k8s-namespace` | Kubernetes namespace for jobs (default: `default`) |
| `--max-parallel-jobs` | Maximum parallel Kubernetes jobs (default: 10) |
| `--max-wait-time` | Maximum time to wait for analysis completion (seconds, default: 3600) |
| `--poll-interval` | Interval between status polls (seconds, default: 10) |
