export function Sidebar({setShowform}) {
  return (
    <>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px"}}
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
            <button class="btn text-white" onClick={() => setShowform(true)}>
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Create new
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Dashboard
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Orders
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Products
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Clients
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Gandu
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Gandu
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Gandu
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Gandu
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Gandu
            </button>
          </li>
          <li>
            <button class="btn">
              <svg
                class="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              ></svg>
              Bho cd k
            </button>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
