export default () => {
  const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
  return { 
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token.content 
  }
}
