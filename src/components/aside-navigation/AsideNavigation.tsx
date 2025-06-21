import React from 'react';
import LinkWithParams from "@/components/link-with-params/LinkWithParams";
import SuspenseWrapper from "@/components/suspense-wrapper/SuspenseWrapper";


const AsideNavigation = () => {
  return (
    <aside className="text-2xl font-semibold p-4 bg-(--background-transparent) rounded-4xl">

      <ul className="mb-12">
        <li>
          <SuspenseWrapper>
            <LinkWithParams href={'/'} className="flex items-center gap-4 mb-3 w-fit opacity-60" activeClass="!opacity-100">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75Z" fill="#ffffff"></path> </g></svg>
              <span>Home</span>
            </LinkWithParams>
          </SuspenseWrapper>
        </li>
        <li>
          <SuspenseWrapper>
            <LinkWithParams href={'/favorite'} className="flex items-center gap-4 mb-3 w-fit opacity-60" activeClass="!opacity-100">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" fill="#ffffff" stroke="#ffffff" strokeWidth="2"></path> </g></svg>
              <span>Favorite</span>
            </LinkWithParams>
          </SuspenseWrapper>
        </li>
        <li>
          <SuspenseWrapper>
            <LinkWithParams href={'/upcoming'} className="flex items-center gap-4 mb-3 w-fit opacity-60" activeClass="!opacity-100">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z" fill="#ffffff"></path> <path d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H16C19.5 21.9998 21 19.9998 21 16.9998V10.8398C21 10.2898 20.55 9.83984 20 9.83984ZM9.21 18.2098C9.11 18.2998 9 18.3698 8.88 18.4198C8.76 18.4698 8.63 18.4998 8.5 18.4998C8.37 18.4998 8.24 18.4698 8.12 18.4198C8 18.3698 7.89 18.2998 7.79 18.2098C7.61 18.0198 7.5 17.7598 7.5 17.4998C7.5 17.2398 7.61 16.9798 7.79 16.7898C7.89 16.6998 8 16.6298 8.12 16.5798C8.36 16.4798 8.64 16.4798 8.88 16.5798C9 16.6298 9.11 16.6998 9.21 16.7898C9.39 16.9798 9.5 17.2398 9.5 17.4998C9.5 17.7598 9.39 18.0198 9.21 18.2098ZM9.42 14.3798C9.37 14.4998 9.3 14.6098 9.21 14.7098C9.11 14.7998 9 14.8698 8.88 14.9198C8.76 14.9698 8.63 14.9998 8.5 14.9998C8.37 14.9998 8.24 14.9698 8.12 14.9198C8 14.8698 7.89 14.7998 7.79 14.7098C7.7 14.6098 7.63 14.4998 7.58 14.3798C7.53 14.2598 7.5 14.1298 7.5 13.9998C7.5 13.8698 7.53 13.7398 7.58 13.6198C7.63 13.4998 7.7 13.3898 7.79 13.2898C7.89 13.1998 8 13.1298 8.12 13.0798C8.36 12.9798 8.64 12.9798 8.88 13.0798C9 13.1298 9.11 13.1998 9.21 13.2898C9.3 13.3898 9.37 13.4998 9.42 13.6198C9.47 13.7398 9.5 13.8698 9.5 13.9998C9.5 14.1298 9.47 14.2598 9.42 14.3798ZM12.71 14.7098C12.61 14.7998 12.5 14.8698 12.38 14.9198C12.26 14.9698 12.13 14.9998 12 14.9998C11.87 14.9998 11.74 14.9698 11.62 14.9198C11.5 14.8698 11.39 14.7998 11.29 14.7098C11.11 14.5198 11 14.2598 11 13.9998C11 13.7398 11.11 13.4798 11.29 13.2898C11.39 13.1998 11.5 13.1298 11.62 13.0798C11.86 12.9698 12.14 12.9698 12.38 13.0798C12.5 13.1298 12.61 13.1998 12.71 13.2898C12.89 13.4798 13 13.7398 13 13.9998C13 14.2598 12.89 14.5198 12.71 14.7098Z" fill="#ffffff"></path> </g></svg>
              <span>Coming soon</span>
            </LinkWithParams>
          </SuspenseWrapper>
        </li>
        <li>
          <SuspenseWrapper>
            <LinkWithParams href={'/popular'} className="flex items-center gap-4 mb-3 w-fit opacity-60" activeClass="!opacity-100">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.88 11.53C16.88 11.92 16.57 12.23 16.18 12.23C15.79 12.23 15.48 11.92 15.48 11.53V11.35L12.76 14.07C12.61 14.22 12.41 14.29 12.2 14.27C11.99 14.25 11.8 14.14 11.69 13.96L10.67 12.44L8.29 14.82C8.15 14.96 7.98 15.02 7.8 15.02C7.62 15.02 7.44 14.95 7.31 14.82C7.04 14.55 7.04 14.11 7.31 13.83L10.29 10.85C10.44 10.7 10.64 10.63 10.85 10.65C11.06 10.67 11.25 10.78 11.36 10.96L12.38 12.48L14.49 10.37H14.31C13.92 10.37 13.61 10.06 13.61 9.67C13.61 9.28 13.92 8.97 14.31 8.97H16.17C16.26 8.97 16.35 8.99 16.44 9.02C16.61 9.09 16.75 9.23 16.82 9.4C16.86 9.49 16.87 9.58 16.87 9.67V11.53H16.88Z" fill="#ffffff"></path> </g></svg>
              <span>Trending</span>
            </LinkWithParams>
          </SuspenseWrapper>
        </li>
      </ul>

      <ul className="mb-8">
        <li>
          <SuspenseWrapper>
            <LinkWithParams href={'/settings'} className="flex items-center gap-4 mb-3 w-fit opacity-60" activeClass="!opacity-100">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.4277 2C11.3139 2 10.2995 2.6007 8.27081 3.80211L7.58466 4.20846C5.55594 5.40987 4.54158 6.01057 3.98466 7C3.42773 7.98943 3.42773 9.19084 3.42773 11.5937V12.4063C3.42773 14.8092 3.42773 16.0106 3.98466 17C4.54158 17.9894 5.55594 18.5901 7.58466 19.7915L8.27081 20.1979C10.2995 21.3993 11.3139 22 12.4277 22C13.5416 22 14.5559 21.3993 16.5847 20.1979L17.2708 19.7915C19.2995 18.5901 20.3139 17.9894 20.8708 17C21.4277 16.0106 21.4277 14.8092 21.4277 12.4063V11.5937C21.4277 9.19084 21.4277 7.98943 20.8708 7C20.3139 6.01057 19.2995 5.40987 17.2708 4.20846L16.5847 3.80211C14.5559 2.6007 13.5416 2 12.4277 2ZM8.67773 12C8.67773 9.92893 10.3567 8.25 12.4277 8.25C14.4988 8.25 16.1777 9.92893 16.1777 12C16.1777 14.0711 14.4988 15.75 12.4277 15.75C10.3567 15.75 8.67773 14.0711 8.67773 12Z" fill="#ffffff"></path> </g></svg>
              <span>Settings</span>
            </LinkWithParams>
          </SuspenseWrapper>
        </li>
        <li>
          <SuspenseWrapper>
            <LinkWithParams href={'/support'} className="flex items-center gap-4 mb-3 w-fit opacity-60" activeClass="!opacity-100">
              <svg className="size-6" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.418 46.418"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M41.553,2.893H4.865C2.177,2.893,0,5.071,0,7.758v24.042c0,2.688,2.178,4.863,4.865,4.863h27.874l5.354,5.418 c0.933,0.942,2.187,1.444,3.462,1.444c0.62,0,1.25-0.118,1.848-0.364c1.824-0.75,3.016-2.527,3.016-4.5V7.758 C46.418,5.07,44.24,2.893,41.553,2.893z M25.4,29.605c0,1.67-1.287,2.959-3.025,2.959c-1.74,0-3.027-1.289-3.027-2.959v-0.069 c0-1.668,1.288-2.957,3.027-2.957c1.738,0,3.025,1.289,3.025,2.957V29.605z M31.488,14.963c0,4.415-3.062,6.227-6.854,6.99 l-0.104,0.626c-0.141,0.903-0.869,1.705-1.878,1.705h-0.277c-1.009,0-1.74-0.769-1.88-1.705l-0.347-2.365 c-0.174-1.149,0.487-1.948,1.601-2.088c3.025-0.382,4.417-1.323,4.417-3.028v-0.066c0-1.564-1.183-2.471-3.201-2.471 c-1.496,0-2.783,0.453-4.035,1.392c-0.418,0.313-0.975,0.558-1.565,0.558c-1.322,0-2.437-1.115-2.437-2.436 c0-0.664,0.279-1.357,0.905-1.879c1.844-1.532,4.175-2.508,7.236-2.508c5.009,0,8.418,2.578,8.418,7.205v0.07H31.488z"></path> </g> </g></svg>
              <span>Support</span>
            </LinkWithParams>
          </SuspenseWrapper>
        </li>
      </ul>

      <div>
        <p className="flex items-center gap-4 mb-3 w-fit opacity-60">
          <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.7295 2H9.26953V6.36H14.7295V2Z" fill="#ffffff"></path> <path d="M16.2305 2V6.36H21.8705C21.3605 3.61 19.3305 2.01 16.2305 2Z" fill="#ffffff"></path> <path d="M2 7.85938V16.1894C2 19.8294 4.17 21.9994 7.81 21.9994H16.19C19.83 21.9994 22 19.8294 22 16.1894V7.85938H2ZM14.44 16.1794L12.36 17.3794C11.92 17.6294 11.49 17.7594 11.09 17.7594C10.79 17.7594 10.52 17.6894 10.27 17.5494C9.69 17.2194 9.37 16.5394 9.37 15.6594V13.2594C9.37 12.3794 9.69 11.6994 10.27 11.3694C10.85 11.0294 11.59 11.0894 12.36 11.5394L14.44 12.7394C15.21 13.1794 15.63 13.7994 15.63 14.4694C15.63 15.1394 15.2 15.7294 14.44 16.1794Z" fill="#ffffff"></path> <path d="M7.76891 2C4.66891 2.01 2.63891 3.61 2.12891 6.36H7.76891V2Z" fill="#ffffff"></path> </g></svg>
          <span>Continue Watching</span>
        </p>
      </div>
    </aside>
  );
};

export default AsideNavigation;