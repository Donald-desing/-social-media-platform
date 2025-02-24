// src/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null }; // Store error and errorInfo
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error }; // Store the error
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);

    this.setState({ errorInfo: errorInfo }); // Store error info in state

    // Send error to an error tracking service (replace with your actual service)
    // Example:  reportErrorToService(error, errorInfo); 
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h1>Oops! Something went wrong.</h1>
          <p>We're working on fixing it. Please try again later.</p>

          {/* Conditionally render error details in development */}
          {process.env.NODE_ENV === 'development' && (
            <details style={{ marginTop: '20px' }}>
              <summary>Click for error details</summary>
              <pre style={{ color: 'red' }}>
                {this.state.error && this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
