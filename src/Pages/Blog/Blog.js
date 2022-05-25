import React from "react";
import Loading from "../Shared/Loading";

const Blog = () => {
  return (
    <div className="pt-5">
      <header className="text-center lg:pb-10 pb-3">
        <h2>
          <span id="span">B</span>
          <span id="span">L</span>
          <span id="span">O</span>
          <span id="span">G</span>
        </h2>
        <div
          className="pt-5"
          style={{
            width: "120px",
            borderBottom: "3px solid #FFAE22",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div class="card card-side w-4/5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body w-2/4">
          <h2 class="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <ul>
            <li>1.Keeping component state local where necessary.</li>
            <li>
              2.Memoizing React components to prevent unnecessary re-renders.
            </li>
            <li>3.Code-splitting in React using dynamic import()</li>
            <li>4.Windowing or list virtualization in React.</li>
            <li>5.Lazy loading images in React.</li>
          </ul>
        </div>
      </div>
      <div class="card card-side w-4/5 mx-auto bg-base-100 shadow-xl my-16">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body w-2/4">
          <h2 class="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <ul>
            <li>
              1. The Problem. Redux, particularly, gives the developer a single
              place to put all their state that seems great at first.
            </li>
            <li>2.The Solution.</li>
            <li>3.Data State.</li>
            <li>4.Control State.</li>
            <li>5.Session State.</li>
            <li>6.Location State.</li>
            <li>7.Conclusion.</li>
          </ul>
        </div>
      </div>
      <div class="card card-side w-4/5 mx-auto bg-base-100 shadow-xl my-16">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body w-2/4">
          <h2 class="card-title">How does prototypical inheritance work?</h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [Prototype] of an object,
            we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div class="card card-side w-4/5 mx-auto bg-base-100 shadow-xl my-16">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body w-2/4">
          <h2 class="card-title">
            How will you implement a search to find products by name?
          </h2>
          <ul>
            <li>1.create an empty variable. ( product).</li>
            <li>2.Initialize it with 1.</li>
            <li>
              3.In a loop traverse through each element (or get each element
              from user) multiply each element to product.
            </li>
            <li>4.Print the product.</li>
          </ul>
        </div>
      </div>
      <div class="card card-side w-4/5 mx-auto bg-base-100 shadow-xl my-16">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body w-2/4">
          <div>
            <h2 class="card-title">What is a unit test?</h2>
            <p>
              This is a type of testing which is done by software developers in
              which the smallest testable module of an application - like
              functions, procedures or interfaces - are tested to ascertain if
              they are fit to use.
            </p>
          </div>
          <div className="mt-5">
            <h2 class="card-title">Why should write unit tests?</h2>
            <p>
              Unit testing ensures that all code meets quality standards before
              it's deployed. This ensures a reliable engineering environment
              where quality is paramount. Over the course of the product
              development life cycle, unit testing saves time and money, and
              helps developers write better code, more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
