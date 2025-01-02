/* eslint-disable no-undef */
import { formatStatus } from './formatStatus';

describe('formatStatus utility', () => {
  it('should format a status with underscores correctly', () => {
    const result = formatStatus('order_in_progress');
    expect(result).toBe('Order In Progress');
  });

  it('should format a single word correctly', () => {
    const result = formatStatus('completed');
    expect(result).toBe('Completed');
  });

  it('should handle already formatted strings correctly', () => {
    const result = formatStatus('Order In Progress');
    expect(result).toBe('Order In Progress');
  });

  it('should return an empty string if given an empty string', () => {
    const result = formatStatus('');
    expect(result).toBe('');
  });

  it('should handle a status with mixed capitalization', () => {
    const result = formatStatus('completed_Order');
    expect(result).toBe('Completed Order');
  });
});
