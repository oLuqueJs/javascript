// Global Scope
const name = 'Hattori Hanzo'

function speakName() {
  const name = 'Hinata'; // Function Scope
  console.log(name);
}
speakName();

// Using speakName scope
function useSpeakName() {
  const name = 'Broh';
  speakName(); // Use Fuction Scope
}
useSpeakName();