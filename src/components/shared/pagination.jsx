export default function Pagination() {
  return (
    <div className="tp-pagination mt-40">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </button>
          </li>
          <li className="page-item active">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
          <li className="page-item">
            <button className="page-link" aria-label="Next">
              <span aria-hidden="true">»</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
