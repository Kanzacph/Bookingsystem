import deleteButton from "../atoms/deleteButton.png";

export default function Delete({ id }) {
  const handleDelete = async () => {
    const response = await fetch(
      `https://eksamen-frontend-default-rtdb.europe-west1.firebasedatabase.app/bookings/${id}.json`,
      {
        method: "DELETE",
      }
    );
    window.location.reload();
  };
  return (
    <div className="delete-knap" onClick={handleDelete}>
      <img src={deleteButton} alt="delete" />
    </div>
  );
}
