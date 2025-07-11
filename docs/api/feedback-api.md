# Feedback API Documentation

## Overview

The Feedback API provides secure endpoints for collecting user feedback from the job aggregator platform's UI. It includes comprehensive validation, authentication, rate limiting, and error handling.

## Base URL

```
Development: http://localhost:3000
Production: https://yourdomain.com
```

## Authentication

All API requests require authentication using an API key passed in the Authorization header:

```http
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### POST /api/feedback

Submits user feedback data for processing and storage.

#### Request Headers

```http
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY
```

#### Request Body

```json
{
  "user_id": "string (1-100 chars, required)",
  "question_type": "Work Type | Job Layout | Right Panel Content (required)",
  "answer": "string (1-500 chars, required)",
  "custom_answer": "string (max 1000 chars, optional)",
  "timestamp": "ISO 8601 datetime string (required)"
}
```

#### Response Format

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "feedback_id": "550e8400-e29b-41d4-a716-446655440000",
    "received_at": "2025-07-02T10:30:00.000Z"
  },
  "message": "Feedback received successfully"
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": {
      "question_type": "Must be one of: Work Type, Job Layout, Right Panel Content",
      "answer": "Field is required and cannot be empty"
    }
  }
}
```

#### Example Request

```bash
curl -X POST http://localhost:3000/api/feedback \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{
    "user_id": "session_abc123",
    "question_type": "Work Type",
    "answer": "Blue Collar",
    "timestamp": "2025-07-02T10:30:00.000Z"
  }'
```

### GET /api/health

Returns the health status of the API service.

#### Response Format

**Success Response (200 OK):**
```json
{
  "status": "healthy",
  "timestamp": "2025-07-02T10:30:00.000Z",
  "services": {
    "api": "operational",
    "validation": "operational",
    "authentication": "operational"
  },
  "version": "0.1.0"
}
```

#### Example Request

```bash
curl -X GET http://localhost:3000/api/health
```

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| `UNAUTHORIZED` | 401 | Invalid or missing API key |
| `VALIDATION_ERROR` | 400 | Request data validation failed |
| `INVALID_JSON` | 400 | Malformed JSON in request body |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests from this IP |
| `METHOD_NOT_ALLOWED` | 405 | HTTP method not supported |
| `INTERNAL_SERVER_ERROR` | 500 | Server error occurred |

## Rate Limiting

- **Limit:** 10 requests per minute per IP address
- **Headers:** Rate limit responses include `Retry-After` header
- **Scope:** Applied per IP address

When rate limit is exceeded:
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later."
  }
}
```

## Security

### HTTPS Only
All requests must use HTTPS in production. HTTP requests are automatically redirected.

### CORS Policy
Cross-origin requests are allowed from configured domains only.

### Input Sanitization
All input is validated and sanitized to prevent injection attacks.

### Logging
- Successful requests are logged with partial user ID (first 8 characters)
- Failed requests are logged with reason and partial IP
- No sensitive data is included in logs

## Validation Rules

### user_id
- Type: String
- Length: 1-100 characters
- Required: Yes
- Format: Any alphanumeric string

### question_type
- Type: Enum
- Values: "Work Type", "Job Layout", "Right Panel Content"
- Required: Yes

### answer
- Type: String
- Length: 1-500 characters
- Required: Yes
- Format: Any text content

### custom_answer
- Type: String
- Length: 0-1000 characters
- Required: No
- Format: Any text content

### timestamp
- Type: String
- Format: ISO 8601 datetime
- Required: Yes
- Example: "2025-07-02T10:30:00.000Z"

## Environment Configuration

### Required Environment Variables

```bash
# API Authentication
FEEDBACK_API_KEY=your-secure-api-key-here

# CORS Configuration
ALLOWED_ORIGINS=https://yourdomain.com,https://app.yourdomain.com

# Optional: Logging Level
NODE_ENV=production
```

### Development Setup

1. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

2. Set your API key:
   ```bash
   FEEDBACK_API_KEY=your-development-key
   ALLOWED_ORIGINS=http://localhost:3000
   ```

## Testing

### Manual Testing

Use the provided test client:

```typescript
import { testFeedbackAPI } from './lib/api-test-client';

// Run comprehensive API tests
await testFeedbackAPI();
```

### Integration Testing

```bash
npm test
```

## Performance

- **Response Time:** < 200ms for valid requests
- **Concurrency:** Supports 50+ simultaneous connections
- **Throughput:** Handles high-volume feedback submissions

## Monitoring

### Health Checks
Monitor `/api/health` endpoint for service availability.

### Metrics to Track
- Response times
- Error rates
- Rate limiting triggers
- Authentication failures

### Alerting
Set up alerts for:
- API response time > 500ms
- Error rate > 5%
- Authentication failure spikes
- Service unavailability

---

## Support

For technical support or questions about the Feedback API, please contact the development team or refer to the project documentation.