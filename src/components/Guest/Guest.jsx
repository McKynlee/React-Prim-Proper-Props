function Guest({ guest, deleteGuest }) {
  return (
    <tr >
      <td>{guest.name}</td>
      <td>{String(guest.kidsMeal)}</td>
      <td><button
        onClick={() => deleteGuest(guest.id)}>
        DELETE
                </button>
      </td>
    </tr>
  )
} // end Guest

export default Guest;