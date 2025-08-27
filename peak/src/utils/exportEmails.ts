// Utility function to export newsletter emails to CSV
export function exportNewsletterEmails() {
  try {
    // Get emails from localStorage
    const emails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
    
    if (emails.length === 0) {
      alert('No newsletter emails to export');
      return;
    }

    // Create CSV content
    const csvHeader = 'Email,Date,Timestamp\n';
    const csvContent = emails.map((entry: { email: string; date: string; timestamp: number }) => {
      const date = new Date(entry.date).toLocaleDateString();
      return `${entry.email},${date},${entry.timestamp}`;
    }).join('\n');

    const csvData = csvHeader + csvContent;

    // Create and download file
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `newsletter_emails_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error('Error exporting emails:', error);
    alert('Error exporting emails. Please try again.');
  }
}

// Function to clear newsletter emails (optional)
export function clearNewsletterEmails() {
  if (confirm('Are you sure you want to clear all newsletter emails?')) {
    localStorage.removeItem('newsletter_emails');
    alert('Newsletter emails cleared');
  }
}

// Function to get email count
export function getNewsletterEmailCount() {
  try {
    const emails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
    return emails.length;
  } catch {
    return 0;
  }
}
