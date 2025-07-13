# Template Format Utility

Guidelines and utilities for working with templates in the BMad framework.

## Template Structure

### Basic Template Format
```markdown
# Template Name

## LLM Instructions
[Instructions for the AI on how to use this template]

## Document Structure
[The actual template content with placeholders]
```

### Placeholder Conventions
```
[PLACEHOLDER_NAME] - Required field
[OPTIONAL_FIELD] - Optional field
[LIST_ITEMS] - Multiple items expected
{{variable}} - Dynamic content
```

## Template Processing

### Variable Replacement
When using templates:
1. Identify all placeholders
2. Gather required information
3. Replace placeholders with actual content
4. Remove optional sections if not needed
5. Validate completeness

### List Handling
For repeated sections:
```
Original:
- [ITEM_1]
- [ITEM_2]
- [ITEM_N]

Becomes:
- First actual item
- Second actual item
- Third actual item
(continue as needed)
```

## Formatting Rules

### Markdown Compliance
- Use proper heading hierarchy
- Maintain consistent formatting
- Preserve code block languages
- Keep table alignment
- Respect line breaks

### Spacing Guidelines
- Single blank line between sections
- No trailing spaces
- Consistent indentation (2 or 4 spaces)
- Proper list formatting

## Template Validation

### Completeness Check
Before finalizing:
- [ ] All required placeholders filled
- [ ] No placeholder text remains
- [ ] Optional sections handled
- [ ] Formatting is consistent
- [ ] Links and references work

### Quality Checks
- [ ] Content makes sense
- [ ] No lorem ipsum
- [ ] Proper grammar/spelling
- [ ] Technical accuracy
- [ ] Follows style guide

## Common Patterns

### Conditional Sections
```
[IF_CONDITION]
This section appears only if condition is met
[END_IF]
```

### Repeated Sections
```
[FOR_EACH_ITEM]
- Item name: [ITEM_NAME]
  Description: [ITEM_DESC]
[END_FOR_EACH]
```

### Nested Templates
```
[INCLUDE template-name]
```

## Best Practices

### DO:
1. Keep templates focused
2. Use clear placeholder names
3. Provide examples
4. Include instructions
5. Version templates

### DON'T:
1. Over-complicate structure
2. Use ambiguous placeholders
3. Mix formats
4. Forget edge cases
5. Skip validation

## Utility Functions

### Template Loader
```
Function: loadTemplate(templateName)
- Locates template file
- Reads content
- Returns parsed structure
```

### Placeholder Finder
```
Function: findPlaceholders(content)
- Scans for [PLACEHOLDER] patterns
- Returns list of required fields
- Identifies optional vs required
```

### Content Validator
```
Function: validateContent(content)
- Checks for remaining placeholders
- Validates markdown structure
- Ensures completeness
```

## Error Handling

### Common Issues
1. Missing required fields
2. Malformed placeholders
3. Broken markdown syntax
4. Incomplete sections
5. Invalid references

### Error Messages
- "Required field [FIELD] not provided"
- "Invalid placeholder syntax at line X"
- "Markdown formatting error"
- "Template not found"
- "Circular reference detected"

Remember: Templates are guides, not rigid structures. Adapt as needed while maintaining consistency.