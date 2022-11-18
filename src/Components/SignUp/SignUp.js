import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import GoogleButton from "react-google-button";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../Hooks/UseTitle";
import navicon from "../../Images/icons8-cooking-70.png";

const SignUp = () => {
  useTitle("Sign Up");
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleSignIn, githubSignIn, userSignUp } = useContext(AuthContext);
  const signInWIthGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://server-side-nayem9b.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            localStorage.setItem("jwt-token", data.token);

            navigate(from, { replace: true });
          });
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  // GitHub Login
  const githubLogin = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://server-side-nayem9b.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            localStorage.setItem("jwt-token", data.token);

            navigate(from, { replace: true });
          });
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  // Email SignUp
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.passwordConfirmation.value;
    console.log(fullName, email, password, confirmPassword);

    if (password === confirmPassword) {
      userSignUp(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: photoURL,
          })
            .then((result) => {
              const user = result.user;
              const currentUser = {
                email: user.email,
              };
              fetch("https://server-side-nayem9b.vercel.app/jwt", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },

                body: JSON.stringify(currentUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);

                  localStorage.setItem("jwt-token", data.token);

                  navigate(from, { replace: true });
                });
              console.log(user);
            })
            .catch((error) => console.log(error));
          navigate(from, { replace: true });
        })
        .catch((error) => console.log(error));
    } else {
      toast.error("Password didn't match");
    }
  };

  return (
    <div>
      <section class='bg-white'>
        <div class='lg:grid lg:min-h-screen lg:grid-cols-12'>
          <section class=' relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
            <img
              alt='Night'
              src='https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              class=' absolute inset-0 h-full w-full object-cover opacity-80'
            />

            <div class='hidden lg:relative lg:block lg:p-12'>
              <img src={navicon} alt='' />

              <h2 class='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
                Welcome to{" "}
                <span className='text-orange-400 text-5xl'>Anonna's</span>{" "}
                Kithchen
              </h2>

              <p class='mt-4 leading-relaxed text-white/90'>
                A Registered chef in your locality
              </p>
            </div>
          </section>

          <main
            aria-label='Main'
            class='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6'>
            <div class='max-w-xl lg:max-w-3xl'>
              <div class='relative -mt-16 block lg:hidden'>
                <a
                  class='inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20'
                  href='/'>
                  <span class='sr-only'>Home</span>
                  <svg
                    class='h-8 sm:h-10'
                    viewBox='0 0 28 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>

                <h1 class='mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
                  Welcome to
                  <span className='text-orange-400 text-5xl'>
                    Anonna's
                  </span>{" "}
                  Kithchen
                </h1>

                <p class='mt-4 leading-relaxed text-gray-500'>
                  A Registered chef in your locality
                </p>
              </div>

              <form
                onSubmit={handleSignUp}
                action='#'
                class='mt-8 grid grid-cols-6 gap-6'>
                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='FirstName'
                    class='block text-sm font-medium text-gray-700'>
                    Full Name
                  </label>

                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    required
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='Photo Url'
                    class='block text-sm font-medium text-gray-700'>
                    Photo URL
                  </label>

                  <input
                    type='text'
                    id='photoURL'
                    name='photoURL'
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6'>
                  <label
                    for='Email'
                    class='block text-sm font-medium text-gray-700'>
                    Email
                  </label>

                  <input
                    type='email'
                    id='Email'
                    name='email'
                    required
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='Password'
                    class='block text-sm font-medium text-gray-700'>
                    Password
                  </label>

                  <input
                    type='password'
                    id='Password'
                    name='password'
                    required
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6 sm:col-span-3'>
                  <label
                    for='PasswordConfirmation'
                    class='block text-sm font-medium text-gray-700'>
                    Password Confirmation
                  </label>

                  <input
                    type='password'
                    id='Passwordconfirmation'
                    name='passwordConfirmation'
                    required
                    class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                  />
                </div>

                <div class='col-span-6'>
                  <label for='MarketingAccept' class='flex gap-4'>
                    <input
                      type='checkbox'
                      id='MarketingAccept'
                      name='marketing_accept'
                      class='h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm'
                    />

                    <span class='text-sm text-gray-700'>
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div class=' col-span-6'>
                  <p class='  text-sm text-gray-500'>
                    By creating an account, you agree to our
                    <span href='#' class='text-gray-700 underline ml-1 mr-1'>
                      terms and conditions
                    </span>
                    and
                    <span href='#' class='text-gray-700 underline ml-1'>
                      privacy policy
                    </span>
                    .
                  </p>
                </div>

                <div class='col-span-6 sm:flex sm:items-center sm:gap-4'>
                  <button class='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'>
                    Create an account
                  </button>

                  <p class='mt-4 text-sm text-gray-500 sm:mt-0'>
                    Already have an account?
                    <Link to='/signin' class='text-gray-700 ml-2 underline'>
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
              <div className='flex mt-5'>
                <GoogleButton onClick={signInWIthGoogle}></GoogleButton>
                <a
                  onClick={githubLogin}
                  class='inline-flex ml-6 items-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75'
                  rel='noreferrer'>
                  GitHub
                  <svg
                    class='ml-2 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clip-rule='evenodd'></path>
                  </svg>
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
