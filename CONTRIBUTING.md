# Contributing to Recipe Sharing Platform

Thank you for your interest in contributing to the Recipe Sharing Platform! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/recipe-sharing-platform.git
   cd recipe-sharing-platform
   ```

3. Install dependencies:
   ```bash
   npm run install:all
   ```

4. Set up environment variables:
   ```bash
   cp server/env.example server/.env
   cp client/env.example client/.env
   ```

5. Start development servers:
   ```bash
   npm run dev
   ```

## How to Contribute

### Reporting Issues

- Use the issue templates provided
- Include steps to reproduce the issue
- Provide relevant system information
- Include screenshots if applicable

### Suggesting Features

- Use the feature request template
- Clearly describe the proposed feature
- Explain why it would be valuable
- Consider implementation complexity

### Code Contributions

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards
3. Add tests for new functionality
4. Ensure all tests pass
5. Commit your changes with descriptive messages
6. Push to your fork and create a pull request

## Coding Standards

### Backend (Node.js/TypeScript)

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Handle errors appropriately
- Write unit tests for new features

### Frontend (React/TypeScript)

- Use functional components with hooks
- Follow React best practices
- Use TypeScript interfaces for props
- Implement responsive design
- Follow the existing design system
- Write component tests

### Database

- Use descriptive table and column names
- Add proper foreign key constraints
- Include database migrations for schema changes
- Document any complex queries

## Pull Request Process

1. Ensure your branch is up to date with main
2. Run tests and ensure they pass
3. Update documentation if needed
4. Provide a clear description of changes
5. Link any related issues
6. Request review from maintainers

## Code Review

All submissions require review. We look for:

- Code quality and readability
- Proper error handling
- Security considerations
- Performance implications
- Test coverage
- Documentation updates

## Development Guidelines

### Commit Messages

Use conventional commit format:
```
type(scope): description

feat(auth): add user registration endpoint
fix(recipes): resolve image upload issue
docs(readme): update installation instructions
```

### Testing

- Write tests for new features
- Ensure existing tests continue to pass
- Aim for meaningful test coverage
- Test both success and error cases

### Documentation

- Update README for significant changes
- Document new API endpoints
- Include code examples where helpful
- Update inline code comments

## Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the code of conduct

## Getting Help

- Check existing issues and discussions
- Join our community chat
- Ask questions in GitHub discussions
- Contact maintainers directly for urgent issues

## Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- Community highlights

Thank you for contributing to make Recipe Sharing Platform better for everyone! 🍳
