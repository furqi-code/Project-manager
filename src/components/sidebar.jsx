export function Sidebar({}) {
  return (
    <>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg
            class="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          ></svg>
          <span class="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
