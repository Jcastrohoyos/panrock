# Security Policy

## Supported Versions

We are committed to providing security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please follow these steps:

1. **Do not** create a public GitHub issue for the vulnerability
2. Contact us directly at [security@panycarneahumada.com](mailto:security@panycarneahumada.com) (replace with your actual security contact)
3. Provide a detailed description of the vulnerability, including:
   - Steps to reproduce
   - Potential impact
   - Suggested remediation (if any)

## Security Best Practices Implemented

This application follows several security best practices:

### 1. Input Validation and Sanitization
- URL validation for redirects to prevent open redirect vulnerabilities
- Form validation using react-hook-form with proper validation rules
- Safe handling of user inputs

### 2. Secure Configuration
- Sensitive information stored in environment variables
- Environment-specific configuration values
- No hardcoded credentials or API keys in source code

### 3. Dependency Security
- Regular dependency audits using `npm audit`
- Automated security checks
- Keeping dependencies up-to-date

### 4. Third-Party Integrations
- Secure handling of EmailJS configuration
- Proper reCAPTCHA implementation
- Safe embedding of Google Maps

## Security Updates

Security updates are applied as follows:
- Critical vulnerabilities: Within 24-48 hours
- High severity vulnerabilities: Within 1 week
- Medium severity vulnerabilities: Within 2 weeks
- Low severity vulnerabilities: Addressed in regular updates

## Security Headers

This application implements appropriate security headers including:
- Content Security Policy (CSP)
- Strict Transport Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options

## Contact

For security-related inquiries, please contact [security@panycarneahumada.com](mailto:security@panycarneahumada.com) (replace with your actual security contact).