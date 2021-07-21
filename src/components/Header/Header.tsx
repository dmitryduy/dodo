import React from "react";

import FlexContainer from "../containers/FlexContainer";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import Container from "../containers/Container";
import {Logo} from "./Header.styles";

const Header: React.FC = () => {
    return (
        <Container>
            <FlexContainer padding='20px 0'>
                <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532.32 97.95">
                    <g>
                        <path fill="#ff6900" d="M42.61,0c27.71,0,49,19.07,49,47.37s-21.3,48-49,48H11.47C5.21,95.34,0,91.17,0,83.87v-72C0,4.62,5.21,0,11.47,0Z"/>
                        <path d="M74.49,37.09c-.15,1.19-1.49,1.19-2.09.15-1.94-3.28-4.47-3.87-8.49-4.17-3-.15-6.55.15-9.83.15a.67.67,0,0,1-.74-.6c.6-2.83,3-8,5.51-8.49,1.19-.15,3.87-.45,5.36-.45,6.85,0,10.58,7.9,10.28,13.41m-38.73,27a47.71,47.71,0,0,0,15.49,1.49,41.26,41.26,0,0,0,19.22-6.26C68.23,65,59.74,68.53,51.69,69.42c0,.45-.15.74-.15,1.19,6.11-.3,11.92-2.38,14.6-4.17-1.49,5.51-8.94,7.75-15.79,8.19a8.85,8.85,0,0,1-.6,1.19,34.28,34.28,0,0,0,10-1.34C56.61,80.3,43.2,84.32,31.88,79a35.74,35.74,0,0,0,3.87-14.9M73.15,24.43a13.1,13.1,0,0,0-9.39-3.58c-4.47,0-8.19,1.19-13.71,1.34-3.72.15-7.15-8-11.62-9.09C36.5,8.79,32,8.19,29.35,10.43c-2.53-1.49-6.41-.74-6.55,2.09-2.83-.89-6.55.6-4.92,4.47-7,.15-8.19,6.41-3.58,7-6.11,3.43-3.28,9.39,1.79,8.19C17,41.12,21,52.74,14.45,55.57c-.74.3-3.72,1-9.39-.3-1.64-.45-3.43-.89-5.07-1.34v4.62c4.92,1.19,9.83,2.09,13,1.79,8.64-.89,9.09-8,8.64-14.3s-2.53-13.26-1.79-18.32l-.3-.3c-3.13,3.28-5.21,2.38-5.51,1.34-.45-2.09,3.28-4.77,5.36-5.66,0-.15.15-.3.15-.45-1.94.3-4.32,0-4.47-1.34-.15-1.64,3.28-3.28,7.75-2.83.15,0,.15-.15.3-.15l-.89-.45c-1.19-.6-1.49-1.64-1-2.23a3.19,3.19,0,0,1,2.68-1,10,10,0,0,1,4,.89c.15,0,.15-.15.3-.15-.3-.3-.74-.6-.89-.89A1.13,1.13,0,0,1,27.41,13a3.11,3.11,0,0,1,3.58.6l.74.74a.55.55,0,0,0,.45-.15,1.61,1.61,0,0,1-.45-1,.89.89,0,0,1,.6-1.19,1.81,1.81,0,0,1,1.79.74A7.27,7.27,0,0,1,35,14.6c-3.13.3-6.85,1.49-9.09,4.62h0a14.2,14.2,0,0,0-1.79,12.22c.89,4.62,2.68,8.94,4.32,13.41h0V45h0C32,55.27,38.88,80.59,5.66,94a13.65,13.65,0,0,0,5.51,1.34H14.6A43,43,0,0,0,29.35,83.13c15.2,6.7,29,3.28,35-7.75a14.56,14.56,0,0,0,6.7-10.73A11.15,11.15,0,0,0,73.29,55c-.15-.6-.74-.6-1.64-.15-12.36,7.45-23.24,8.64-36.2,4.77a97.9,97.9,0,0,0-1.79-12.07c-.3-5.21,1.34-7.75,10.88-4.62,6.26,1.64,9.09,4.47,11.32,6,1,.74,2.38,1.64,3.13,1,.45-.3.6-1.19.6-2.23-.15-2.83-1.49-7.6-2.68-9.39a78,78,0,0,1,8.49,0c3.58.6,3.87,2.53,4.32,3.28,1,3,6.85,2.23,7.3-.3.89-5.21,1.19-12.07-3.87-16.83M7,69.12a54.89,54.89,0,0,0-7,0v3.13c4-.89,6.55-1.34,6.55-1.34Z"/>
                        <path fill="#fff" d="M44.25,36.5c-5.21-1.19-11-2.68-14-7.15,0-.15-.15-.15-.3-.15a.15.15,0,0,0-.15.15,1.34,1.34,0,0,0,.15.74l-.45.15c-.74-1.19-1-2.53-.15-3.58,1.19-1.49,3.43-1.34,4.92-.45l-.15.45a3.27,3.27,0,0,0-2.09.15.81.81,0,0,0-.3,1.19c2.53,4.77,10,5.81,18.77,5.07a1.05,1.05,0,0,0,1.19-.89,16.88,16.88,0,0,1,4.17-7.9,23.35,23.35,0,0,1-4.32.3c-4.47.3-7.15-.3-7.9-.89l.15-.45c.45.15,1,.15,1,0s0-.3-.15-.45C43.8,22,39.92,18,39.92,18c-.45-3.43-5.36-3.43-7.3-.15l-.6-.15a5,5,0,0,1,.74-1.79c-4,.89-6.41,4.62-6.85,8-1.79,15.2,21.3,11.62,27.86,17.73.15.15.45.6.6.3s-2.68-3.87-10.13-5.51m-8-18.17c1-.3,2.68.74,3.43,2.38s.6,3.28-.45,3.72S36.5,23.69,35.75,22c-.15-.3-.15-.45-.3-.74h.15a1,1,0,0,0,1,.3c.45-.3.3-.89,0-1.49s-.74-.89-1.19-.89l-.15-.15a2,2,0,0,1,.89-.74"/>
                        <path fill="#fff" d="M70.46,59.29a41.26,41.26,0,0,1-19.22,6.26,52.7,52.7,0,0,1-15.49-1.49,22.74,22.74,0,0,1-.45,4.47,62,62,0,0,0,13.26,1.64c-.3,1.64-2.09,7.6-6.41,11.32,8,.3,15.34-2.83,17.58-7a30.45,30.45,0,0,1-10,1.34c.15-.45.45-.74.6-1.19,6.85-.3,14.3-2.53,15.79-8.19-2.68,1.79-8.49,3.87-14.6,4.17,0-.45.15-.74.15-1.19,8-1,16.54-4.47,18.77-10.13"/>
                        <path d="M512.81,31a19.74,19.74,0,0,1-5.49-.72l5.37-11.94,5.37,11.94a18,18,0,0,1-5.26.72m19,9.08L519.26,12.77c-1.43-3-3.34-4.3-6.21-4.3h-.48c-3,0-4.9,1.31-6.33,4.3L493.7,40.12c-1.19,2.75-.36,5.14,2.15,6.09a4.21,4.21,0,0,0,5.73-2.27l2.87-6a28.8,28.8,0,0,0,8.6,1.31A24.34,24.34,0,0,0,521.29,38l2.75,6a4.21,4.21,0,0,0,5.73,2.27c2.27-1,3.22-3.46,2-6.09m-45.15-2.51h-2.39V12.53A4.42,4.42,0,0,0,479.61,8a4.32,4.32,0,0,0-4.54,4.54V37.61h-16V12.53a4.66,4.66,0,0,0-9.32,0V42a4.32,4.32,0,0,0,4.54,4.54h27.83v4.06a4.32,4.32,0,0,0,4.54,4.54,4.26,4.26,0,0,0,4.54-4.54V42.15c0-3-1.79-4.54-4.54-4.54m-46.34,0h-2.39V12.53A4.42,4.42,0,0,0,433.27,8a4.32,4.32,0,0,0-4.54,4.54V37.61h-16V12.53a4.66,4.66,0,0,0-9.32,0V42a4.32,4.32,0,0,0,4.54,4.54h27.83v4.06a4.32,4.32,0,0,0,4.54,4.54,4.26,4.26,0,0,0,4.54-4.54V42.15c0-3-1.79-4.54-4.54-4.54M388.84,8.35h-.36c-2.75,0-4.54,1.31-6.45,4.06L367,33.79V12.89a4.48,4.48,0,1,0-9,0V41.32a4.83,4.83,0,0,0,5.14,5.14h.48c2.87,0,4.78-1.43,6.57-4.06l15-21.38v20.9a4.42,4.42,0,1,0,8.84,0V13.49c0-3.11-1.91-5.14-5.26-5.14m-44.91,0h-25.8a4.26,4.26,0,0,0-4.54,4.54v29.5a4.42,4.42,0,0,0,4.66,4.54,4.32,4.32,0,0,0,4.54-4.54V17.31h16.48V42.39a4.36,4.36,0,0,0,4.66,4.54,4.45,4.45,0,0,0,4.66-4.66V12.77a4.33,4.33,0,0,0-4.66-4.42M277.16,38.21c-6.09,0-10.39-4.54-10.39-10.75a10.24,10.24,0,0,1,10.39-10.63c6.09,0,10.39,4.54,10.39,10.63s-4.18,10.75-10.39,10.75m0-30.1a19.13,19.13,0,0,0-19.59,19.47c0,11.23,8.48,19.47,19.59,19.47a19.3,19.3,0,0,0,19.59-19.59c-.12-11.23-8.6-19.35-19.59-19.35m-37.62,29.5h-15a29.09,29.09,0,0,0,2.27-6.45,53.48,53.48,0,0,0,1-9.44l.12-4.42h11.7Zm11.59,0h-2.39V12.89a4.32,4.32,0,0,0-4.54-4.54H223.06c-2.51,0-4.18,1.67-4.18,4.54v6A55.06,55.06,0,0,1,218,30.09a18.58,18.58,0,0,1-3,7.52H214c-3,0-4.42,1.91-4.42,4.54v8.48a4.32,4.32,0,0,0,4.54,4.54,4.26,4.26,0,0,0,4.54-4.54V46.57h27.83v4.06A4.32,4.32,0,0,0,251,55.17a4.26,4.26,0,0,0,4.54-4.54V42.15c.12-2.63-1.31-4.54-4.42-4.54m-62,.6c-6.09,0-10.39-4.54-10.39-10.75a10.24,10.24,0,0,1,10.39-10.63c6.09,0,10.39,4.54,10.39,10.63s-4.06,10.75-10.39,10.75m0-30.1a19.13,19.13,0,0,0-19.59,19.47C169.55,38.81,178,47,189.14,47a19.3,19.3,0,0,0,19.59-19.59c0-11.23-8.48-19.35-19.59-19.35m-37.86,29.5h-15a29.09,29.09,0,0,0,2.27-6.45,53.48,53.48,0,0,0,1-9.44l.12-4.42h11.7Zm11.59,0h-2.39V12.89a4.32,4.32,0,0,0-4.54-4.54H134.8c-2.51,0-4.18,1.67-4.18,4.54v6c0,4.3,0,7.64-.84,11.23a18.58,18.58,0,0,1-3,7.52h-1c-3,0-4.42,1.91-4.42,4.54v8.48A4.32,4.32,0,0,0,126,55.17a4.26,4.26,0,0,0,4.54-4.54V46.57h27.83v4.06a4.32,4.32,0,0,0,4.54,4.54,4.26,4.26,0,0,0,4.54-4.54V42.15c0-2.63-1.43-4.54-4.54-4.54"/>
                        <path d="M131.4,90.45c2.8,0,4-1.68,5-1.68.55,0,.92.42.92,1.08,0,1.18-2.65,2.59-5.92,2.59-5.4,0-8.18-4.64-8.18-9.49s2.78-9.49,8.31-9.49c3.3,0,5.4,1.78,5.4,2.73a1,1,0,0,1-.94,1.1c-1,0-1.57-1.83-4.46-1.83-4.14,0-5.85,3.93-5.85,7.5S127.44,90.45,131.4,90.45Z"/>
                        <path d="M146.1,90.45c3.07,0,3.85-1.89,4.72-1.89a.92.92,0,0,1,.84,1c0,1.13-2.86,2.86-5.58,2.86-4.46,0-6.4-3.43-6.4-7.13s2.36-7.13,6.27-7.13,6,3.43,6,6.79c0,.81-.29,1.23-1.28,1.23H142A4,4,0,0,0,146.1,90.45Zm-.16-10.28c-2.86-.1-3.88,2.18-4,4.3h7.65C149.64,82.48,148.49,80.17,145.95,80.17Z"/>
                        <path d="M153.73,79.39a1,1,0,0,1,1.15-1H163a1,1,0,0,1,1.15,1A1,1,0,0,1,163,80.46H160.1V91.08c0,.84-.45,1.36-1.15,1.36s-1.13-.52-1.13-1.36V80.46h-2.94A1,1,0,0,1,153.73,79.39Z"/>
                        <path d="M177.63,88.12c0,2.2-1.6,4.17-5.32,4.17h-4.22c-.89,0-1.31-.42-1.31-1.21V79.54c0-.84.42-1.36,1.13-1.36s1.15.52,1.15,1.36V84h3.77C176.14,84,177.63,85.73,177.63,88.12Zm-2.28,0c0-1.36-.89-2.12-3-2.12h-3.28v4.22h3.28C174,90.24,175.35,89.71,175.35,88.14Z"/>
                        <path d="M189.35,92.44c-.71,0-1.13-.52-1.13-1.36V79.57c0-.84.42-1.23,1.15-1.23h8.76a1,1,0,0,1,1,1V91.08c0,.84-.42,1.36-1.15,1.36s-1.13-.52-1.13-1.36V80.44h-6.4V91.08C190.5,91.92,190.05,92.44,189.35,92.44Z"/>
                        <path d="M204.34,92.44c-.66,0-1.07-.37-1.07-1.34V79.54c0-.87.42-1.36,1.13-1.36s1.15.5,1.15,1.36v8.89l6.5-9.36c.39-.52.73-.89,1.39-.89s1.1.45,1.1,1.28V91.08c0,.84-.42,1.36-1.15,1.36s-1.13-.52-1.13-1.36v-9l-6.61,9.44C205.26,92.13,205,92.44,204.34,92.44Z"/>
                        <path d="M218.62,91.29V79.54c0-.84.42-1.36,1.13-1.36s1.15.52,1.15,1.36V90.19h6.4V79.54c0-.84.42-1.36,1.13-1.36s1.15.52,1.15,1.36V90.19h1.1a1.09,1.09,0,0,1,1.13,1.13v3.51c0,.89-.42,1.36-1.1,1.36s-1.1-.47-1.1-1.36V92.28h-9.94A1,1,0,0,1,218.62,91.29Z"/>
                        <path d="M234.71,91.29V79.54c0-.84.42-1.36,1.13-1.36s1.15.52,1.15,1.36V90.19h6.4V79.54c0-.84.42-1.36,1.13-1.36s1.15.52,1.15,1.36V90.19h1.1a1.09,1.09,0,0,1,1.13,1.13v3.51c0,.89-.42,1.36-1.1,1.36s-1.1-.47-1.1-1.36V92.28h-9.94A1,1,0,0,1,234.71,91.29Z"/>
                        <path d="M256.39,90.45c3.07,0,3.85-1.89,4.72-1.89a.92.92,0,0,1,.84,1c0,1.13-2.86,2.86-5.58,2.86-4.46,0-6.4-3.43-6.4-7.13s2.36-7.13,6.27-7.13,6,3.43,6,6.79c0,.81-.29,1.23-1.29,1.23h-8.68A4,4,0,0,0,256.39,90.45Zm-.16-10.28c-2.86-.1-3.88,2.18-4,4.3h7.66C259.93,82.48,258.77,80.17,256.23,80.17Z"/>
                        <path d="M266.74,78.18a1.11,1.11,0,0,1,1.15,1.23v.68h.05a3.81,3.81,0,0,1,3.72-1.91c3.78,0,6,3.43,6,7.13s-2.18,7.13-6,7.13a4.56,4.56,0,0,1-3.72-1.89h-.05v6.16a1.16,1.16,0,1,1-2.31,0V79.41A1.11,1.11,0,0,1,266.74,78.18Zm4.75,12.27c2.83,0,3.83-2.78,3.83-5.14s-1-5.14-3.83-5.14-3.83,2.78-3.83,5.14S268.66,90.45,271.49,90.45Z"/>
                        <path d="M282.18,92.44c-.66,0-1.08-.37-1.08-1.34V79.54c0-.87.42-1.36,1.13-1.36s1.15.5,1.15,1.36v8.89l6.5-9.36a1.66,1.66,0,0,1,1.39-.89c.63,0,1.1.45,1.1,1.28V91.08c0,.84-.42,1.36-1.15,1.36s-1.13-.52-1.13-1.36v-9l-6.61,9.44C283.1,92.13,282.81,92.44,282.18,92.44Z"/>
                        <path d="M297.54,92.44c-.66,0-1.08-.37-1.08-1.34V79.54c0-.87.42-1.36,1.13-1.36s1.15.5,1.15,1.36v8.89l6.5-9.36a1.66,1.66,0,0,1,1.39-.89c.63,0,1.1.45,1.1,1.28V91.08c0,.84-.42,1.36-1.15,1.36s-1.13-.52-1.13-1.36v-9l-6.61,9.44C298.45,92.13,298.17,92.44,297.54,92.44Zm1.94-19.37c.81,0,1.26,1.49,2.73,1.49s1.91-1.49,2.73-1.49a.85.85,0,0,1,.81.94c0,1.55-2.1,2.54-3.54,2.54s-3.54-1-3.54-2.54A.85.85,0,0,1,299.48,73.07Z"/>
                        <path d="M332.16,92.44c-.6,0-.89-.29-1.36-1l-8.94-13.53h-.05V91.05c0,.92-.42,1.39-1.15,1.39s-1.15-.47-1.15-1.39V74.77a1.16,1.16,0,0,1,1.15-1.31c.66,0,1,.34,1.44,1l8.83,13.4H331v-13c0-.92.42-1.39,1.15-1.39s1.15.47,1.15,1.39V91.08C333.29,92.1,332.82,92.44,332.16,92.44Zm13-13.84a4.85,4.85,0,0,1-4.85,5.14c-3.12,0-4.82-2.54-4.82-5.19s1.7-5.16,4.82-5.16S345.16,75.93,345.16,78.6Zm-.37,8a1.06,1.06,0,0,1-1.15,1H337a1,1,0,1,1,0-2h6.61A1.06,1.06,0,0,1,344.8,86.65Zm-7.16-8.1c0,1.73.87,3.46,2.67,3.46S343,80.28,343,78.6s-.84-3.49-2.67-3.49S337.64,76.82,337.64,78.55Z"/>
                        <path d="M355.69,74.62a1,1,0,0,1,1-1h4c.45,0,.71.05.71.63v17a1.16,1.16,0,1,1-2.31,0V75.61h-2.41A1,1,0,0,1,355.69,74.62Z"/>
                        <path d="M375.51,78.34h4c2.62,0,4.46,1,4.46,3.51a3,3,0,0,1-2.12,2.94v.05c2.33.29,3.25,1.63,3.25,3.38,0,2.31-1.81,4.06-5.32,4.06h-4.22c-.89,0-1.31-.42-1.31-1.21V79.52C374.2,78.73,374.62,78.34,375.51,78.34Zm6.16,3.78c0-1.23-1-1.83-2.46-1.83h-2.73v3.83h2.33C380.52,84.11,381.67,83.66,381.67,82.11Zm1.1,6.13c0-1.36-.89-2.2-3.22-2.2h-3.07v4.3h3.28C381.54,90.34,382.77,89.69,382.77,88.25Z"/>
                        <path d="M397.11,92.44A1.11,1.11,0,0,1,396,91.21V74.88a1.14,1.14,0,0,1,1.23-1.26h4.56a5.72,5.72,0,0,1,6.06,5.87,5.81,5.81,0,0,1-6,5.82h-3.57v5.9A1.11,1.11,0,0,1,397.11,92.44Zm8.39-13a3.66,3.66,0,0,0-3.93-3.88h-3.3v7.71h3.41A3.72,3.72,0,0,0,405.49,79.49Z"/>
                        <path d="M416.13,78.18c3.93,0,6.13,3.43,6.13,7.13s-2.2,7.13-6.13,7.13S410,89,410,85.31,412.2,78.18,416.13,78.18Zm0,12.27c2.83,0,3.83-2.78,3.83-5.14s-1-5.14-3.83-5.14-3.83,2.78-3.83,5.14S413.3,90.45,416.13,90.45Z"/>
                        <path d="M431.44,78.18c2.36,0,3.75.81,3.75,1.76a1,1,0,0,1-.94,1c-.89,0-1.23-.73-2.8-.73-2.86,0-4,2.78-4,5.14s1.13,5.14,4,5.14c1.63,0,2-.79,2.78-.79a.86.86,0,0,1,.89,1c0,.87-1.28,1.81-3.67,1.81-4.25,0-6.29-3.43-6.29-7.13S427.19,78.18,431.44,78.18Z"/>
                        <path d="M444.13,78.18c2.36,0,3.75.81,3.75,1.76a1,1,0,0,1-.94,1c-.89,0-1.23-.73-2.8-.73-2.86,0-4,2.78-4,5.14s1.13,5.14,4,5.14c1.63,0,2-.79,2.78-.79a.86.86,0,0,1,.89,1c0,.87-1.28,1.81-3.67,1.81-4.25,0-6.29-3.43-6.29-7.13S439.88,78.18,444.13,78.18Z"/>
                        <path d="M452.2,92.44c-.66,0-1.08-.37-1.08-1.34V79.54c0-.87.42-1.36,1.13-1.36s1.15.5,1.15,1.36v8.89l6.5-9.36a1.66,1.66,0,0,1,1.39-.89c.63,0,1.1.45,1.1,1.28V91.08c0,.84-.42,1.36-1.15,1.36s-1.13-.52-1.13-1.36v-9l-6.61,9.44C453.11,92.13,452.83,92.44,452.2,92.44Z"/>
                        <path d="M467.56,92.44c-.66,0-1.08-.37-1.08-1.34V79.54c0-.87.42-1.36,1.13-1.36s1.15.5,1.15,1.36v8.89l6.5-9.36a1.66,1.66,0,0,1,1.39-.89c.63,0,1.1.45,1.1,1.28V91.08c0,.84-.42,1.36-1.15,1.36s-1.13-.52-1.13-1.36v-9l-6.61,9.44C468.47,92.13,468.18,92.44,467.56,92.44Z"/>
                    </g>
                </Logo>
                <DeliveryInfo/>
            </FlexContainer>
        </Container>
    )
}

export default Header;