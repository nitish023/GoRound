import { useState } from 'react';

function Modal({ onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Goal Created:', { title, description });
    onClose(); // Close modal after submit
  };

  return (
    <div className="fixed inset-0 bg-gray bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl relative">
        <h2 className="text-xl font-bold mb-4">Create New Goal</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="w-full border p-2 rounded"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
