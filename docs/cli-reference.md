# CLI Reference

Complete command-line options reference for Scanipy.

!!! note "Command Usage"
    Run from source using `python scanipy.py`.

## Synopsis

```bash
python scanipy.py --query QUERY [OPTIONS]
```

## Required Arguments

| Option | Short | Description |
|--------|-------|-------------|
| `--query` | `-q` | Code pattern to search for |

## Search Options

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--language` | `-l` | Programming language filter | None |
| `--extension` | `-e` | File extension filter | None |
| `--keywords` | `-k` | Comma-separated keywords to filter by | None |
| `--additional-params` | | Extra GitHub search parameters | None |
| `--pages` | `-p` | Max pages to retrieve (max 10) | 5 |
| `--search-strategy` | `-s` | Search strategy: `tiered` or `greedy` | `tiered` |
| `--sort-by` | | Sort by: `stars` or `updated` | `stars` |

## API Service URLs

| Option | Description | Default |
|--------|-------------|---------|
| `--github-api-url` | GitHub Search API service URL | `http://localhost:8001` or `$GITHUB_API_URL` |
| `--api-url` | Semgrep API service URL (required for `--run-semgrep`) | `$SEMGREP_API_URL` |

## Authentication

| Option | Description | Default |
|--------|-------------|---------|
| `--github-token` | GitHub Personal Access Token | `$GITHUB_TOKEN` |

## Output Options

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--output` | `-o` | Output JSON file path | `repos.json` |
| `--input-file` | `-i` | Load repos from JSON file (skip search) | None |
| `--verbose` | `-v` | Enable verbose output | False |

## Semgrep Options

| Option | Description | Default |
|--------|-------------|---------|
| `--run-semgrep` | Run Semgrep on top 10 repos (requires `--api-url` and `--s3-bucket`) | False |
| `--semgrep-args` | Additional Semgrep arguments | None |
| `--pro` | Use Semgrep Pro | False |
| `--rules` | Custom Semgrep rules path | None |
| `--api-url` | Semgrep API service URL (required for `--run-semgrep`) | `$SEMGREP_API_URL` |
| `--s3-bucket` | S3 bucket for storing results (required for `--run-semgrep`) | None |
| `--k8s-namespace` | Kubernetes namespace for jobs | `default` |
| `--max-parallel-jobs` | Maximum parallel Kubernetes jobs | 10 |
| `--max-wait-time` | Maximum time to wait for analysis (seconds) | 3600 |
| `--poll-interval` | Interval between status polls (seconds) | 10 |

## CodeQL Options

| Option | Description | Default |
|--------|-------------|---------|
| `--run-codeql` | Run CodeQL on top 10 repos | False |
| `--codeql-queries` | CodeQL query suite or path | Default suite |
| `--codeql-format` | CodeQL output format (`sarif-latest`, `csv`, `text`) | `sarif-latest` |
| `--codeql-output-dir` | Directory to save SARIF results | `./codeql_results` |
| `--codeql-results-db` | SQLite database for storing analysis results | None |
| `--codeql-resume` | Resume previous CodeQL analysis | False |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GITHUB_TOKEN` | GitHub Personal Access Token |
| `GITHUB_API_URL` | GitHub Search API service URL (default: `http://localhost:8001`) |
| `SEMGREP_API_URL` | Semgrep API service URL |

## Examples

### Basic Search

```bash
python scanipy.py --query "pickle.loads" --language python
```

### With Semgrep Analysis

```bash
python scanipy.py --query "extractall" --language python --run-semgrep \
  --api-url http://scanipy-api:8000 \
  --s3-bucket scanipy-results \
  --k8s-namespace scanipy \
  --max-parallel-jobs 20
```

### With CodeQL Analysis

```bash
python scanipy.py --query "extractall" --language python --run-codeql \
  --codeql-output-dir ./results
```

### Full Example

```bash
python scanipy.py \
  --query "subprocess" \
  --language python \
  --keywords "shell=True,user" \
  --pages 10 \
  --search-strategy tiered \
  --run-semgrep \
  --api-url http://scanipy-api:8000 \
  --s3-bucket scanipy-results \
  --verbose
```

## Exit Codes

| Code | Description |
|------|-------------|
| 0 | Success |
| 1 | Error (missing token, invalid arguments, etc.) |
| 2 | Argument parsing error |
