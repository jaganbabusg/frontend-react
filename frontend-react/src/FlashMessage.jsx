import { useFlashMessage } from './FlashMessageStore';

export default function FlashMessage() {
  // Use the custom hook to access the flash message
  const { getFlashMessage } = useFlashMessage();
  // Get the message from the store
  const message = getFlashMessage();
  // Render the flash message if it exists
  return <>
    {message.message && (
      <div className={`alert alert-${message.type}`}>
        {message.message}
      </div>
    )}
  </>;
}