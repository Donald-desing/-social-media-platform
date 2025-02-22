// Incorrect
<ErrorBoundary> {/* No assignment or function call */}
    {children}
</ErrorBoundary>;

// Correct (if you are just rendering the ErrorBoundary)
return (
    <ErrorBoundary>
        {children}
    </ErrorBoundary>
);

// Correct (if you are assigning the result to a variable)
const errorBoundaryElement = (
    <ErrorBoundary>
        {children}
    </ErrorBoundary>
);
return errorBoundaryElement;
