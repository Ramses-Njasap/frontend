import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LoginSignupModal = () => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">
          LaLouge SignIn
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      {/* End header */}

      <div className="modal-body">
        <div className="log-reg-form">
          <div className="navtab-style2">

            <div className="tab-content" id="nav-tabContent2">
              <div
                className="tab-pane fade show active fz15"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <SignIn />
              </div>
              {/* End signin content */}

              <div
                className="tab-pane fade fz15"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <SignUp />
              </div>
              {/* End signup content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
