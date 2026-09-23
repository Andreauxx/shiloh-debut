import React from 'react';
import './Button.css';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${loading ? 'btn--loading' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="btn__loader">
          <span className="btn__loader-dot" />
          <span className="btn__loader-dot" />
          <span className="btn__loader-dot" />
        </span>
      ) : (
        children
      )}
    </button>
  );
}
