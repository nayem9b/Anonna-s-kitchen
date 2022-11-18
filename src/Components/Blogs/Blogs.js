import React from "react";
import useTitle from "../Hooks/UseTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Difference between SQL and NoSQL?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL. <br /> There
              are five practical differences between SQL and NoSQL: <br />{" "}
              1.Language <br />
              2.Scalability <br /> 3.Structure <br /> 4.Properties Support and{" "}
              <br /> 5.communities
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded h-[168px] w-[300px]'
              alt='hero'
              src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png'
            />
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              What is JWT, and how does it work?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity
              and authenticity of the token can be verified by other parties
              involved. The purpose of using JWT is not to hide data but to
              ensure the authenticity of the data. JWT is signed and encoded,
              not encrypted. JWT is a token based stateless authentication
              mechanism. Since it is a client-side based stateless session,
              server doesn't have to completely rely on a datastore(database) to
              save session information.
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded h-[168px] w-[300px]'
              alt='hero'
              src='http://jwt.io/img/logo-asset.svg'
            />
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              What is the difference between javascript and NodeJS?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              1. JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language. <br />
              2. JavaScript is a simple programming language that can be used
              with any browser that has the JavaScript Engine installed.
              Node.js, on the other hand, is an interpreter or execution
              environment for the JavaScript programming language. It requires
              libraries that can be conveniently accessed from JavaScript
              programming to be more helpful.
              <br />
              3.Any engine may run JavaScript. As a result, writing JavaScript
              is incredibly easy, and any working environment is similar to a
              complete browser. Node.js, on the other hand, only enables the V8
              engine. Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported.
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='https://blog.boot.dev/img/800/Nodejs-vs-Javascript-min.webp'
            />
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              How does NodeJS handle multiple requests at the same time?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              NodeJS Web Server maintains a limited Thread Pool to provide
              services to client requests. Multiple clients make multiple
              requests to the NodeJS server. NodeJS receives these requests and
              places them into the EventQueue . NodeJS server has an internal
              component referred to as the EventLoop which is an infinite loop
              that receives requests and processes them. This EventLoop is
              single threaded. In other words, EventLoop is the listener for the
              EventQueue. So, we have an event queue where the requests are
              being placed and we have an event loop listening to these requests
              in the event queue. What happens next? The listener(the event
              loop) processes the request and if it is able to process the
              request without needing any blocking IO operations, then the event
              loop would itself process the request and sends the response back
              to the client by itself. If the current request uses blocking IO
              operations, the event loop sees whether there are threads
              available in the thread pool, picks up one thread from the thread
              pool and assigns the particular request to the picked thread. That
              thread does the blocking IO operations and sends the response back
              to the event loop and once the response gets to the event loop,
              the event loop sends the response back to the client.
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded h-[168px] w-[300px]'
              alt='hero'
              src='https://tsh.io/wp-content/uploads/2019/09/concurrency-nodejs_.png'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
