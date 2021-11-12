import React, { Component, ReactChild } from 'react'

interface ErrorBoundaryProps {
  children: ReactChild
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooooops. There is an error</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
