"use client"
import React, { useState } from 'react'
import {  signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CustomInputField from '@/app/components/CustomInputField';
import DownArrowSvg from '@/app/components/icons/DownArrowSvg';
import NavbarLogoOnLgSvg from '@/app/components/icons/NavbarLogoOnLgSvg'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';

const DemoSvg1 = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><path fill="#FFF" fillRule="evenodd" clipRule="evenodd" d="M8.25 3C8.25 2.58579 8.58579 2.25 9 2.25C9.41421 2.25 9.75 2.58579 9.75 3V3.75H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V3.75H16C18.7614 3.75 21 5.98858 21 8.75V16.75C21 19.5114 18.7614 21.75 16 21.75H8C5.23858 21.75 3 19.5114 3 16.75V8.75C3 5.98858 5.23858 3.75 8 3.75H8.25V3ZM14.25 5.25V6C14.25 6.41421 14.5858 6.75 15 6.75C15.4142 6.75 15.75 6.41421 15.75 6V5.25769C17.8427 5.38673 19.5 7.12482 19.5 9.25V10.5H4.5V9.25C4.5 7.12482 6.15732 5.38673 8.25 5.25769V6C8.25 6.41421 8.58579 6.75 9 6.75C9.41421 6.75 9.75 6.41421 9.75 6V5.25H14.25ZM13.018 13.9822C13.018 14.5443 12.5623 15 12.0002 15C11.438 15 10.9823 14.5443 10.9823 13.9822C10.9823 13.42 11.438 12.9643 12.0002 12.9643C12.5623 12.9643 13.018 13.42 13.018 13.9822ZM15.8567 15C16.4189 15 16.8746 14.5443 16.8746 13.9822C16.8746 13.42 16.4189 12.9643 15.8567 12.9643C15.2946 12.9643 14.8389 13.42 14.8389 13.9822C14.8389 14.5443 15.2946 15 15.8567 15ZM9.16072 13.9822C9.16072 14.5443 8.70501 15 8.14286 15C7.58071 15 7.125 14.5443 7.125 13.9822C7.125 13.42 7.58071 12.9643 8.14286 12.9643C8.70501 12.9643 9.16072 13.42 9.16072 13.9822ZM12.0002 18.7499C12.5623 18.7499 13.018 18.2942 13.018 17.7321C13.018 17.1699 12.5623 16.7142 12.0002 16.7142C11.438 16.7142 10.9823 17.1699 10.9823 17.7321C10.9823 18.2942 11.438 18.7499 12.0002 18.7499ZM16.8746 17.7321C16.8746 18.2942 16.4189 18.7499 15.8567 18.7499C15.2946 18.7499 14.8389 18.2942 14.8389 17.7321C14.8389 17.1699 15.2946 16.7142 15.8567 16.7142C16.4189 16.7142 16.8746 17.1699 16.8746 17.7321ZM8.14286 18.7499C8.705 18.7499 9.16071 18.2942 9.16071 17.7321C9.16071 17.1699 8.705 16.7142 8.14286 16.7142C7.58071 16.7142 7.125 17.1699 7.125 17.7321C7.125 18.2942 7.58071 18.7499 8.14286 18.7499Z" /><defs><linearGradient id="paint_drop_linear" x1={3} y1={12} x2={21} y2={12} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>

  )
}

const DemoSvg2 = () => {
  return (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.47 2 12 2C17.52 2 22 6.48 22 12C22 17.53 17.52 22 12 22C6.47 22 2 17.53 2 12ZM10.7082 9.55925C10.18 9.76239 9.76259 10.1798 9.55944 10.708L8.03457 14.6727C7.72352 15.4814 8.51815 16.2761 9.32689 15.965L13.2916 14.4401C13.8198 14.237 14.2372 13.8196 14.4403 13.2914L15.9652 9.3267C16.2763 8.51796 15.4816 7.72332 14.6729 8.03438L10.7082 9.55925Z" fill="#FFF" /><defs><linearGradient id="paint_discover_linear" x1={2} y1={12} x2={22} y2={12} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
  )
}

const DemoSvg3 = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" className="SignUpLayout_iconCreate__Wno4z"><path fillRule="evenodd" clipRule="evenodd" d="M8.00006 1L7.50006 0L7.00006 1L6.00006 1.125L6.83406 1.833L6.50006 3L7.50006 2.334L8.50006 3L8.16606 1.833L9.00006 1.125L8.00006 1ZM16.3341 11.666L15.5001 10L14.6661 11.666L13.0001 11.875L14.3891 13.056L13.8341 15L15.5001 13.889L17.1661 15L16.6111 13.056L18.0001 11.875L16.3341 11.666ZM3.66706 3.333L3.00006 2L2.33306 3.333L1.00006 3.5L2.11106 4.444L1.66706 6L3.00006 5.111L4.33306 6L3.88906 4.444L5.00006 3.5L3.66706 3.333ZM0.414062 14C0.414062 14.534 0.622062 15.036 1.00006 15.414L2.58606 17C2.96406 17.378 3.46606 17.586 4.00006 17.586C4.53406 17.586 5.03606 17.378 5.41406 17L17.0001 5.414C17.3781 5.036 17.5861 4.534 17.5861 4C17.5861 3.466 17.3781 2.964 17.0001 2.586L15.4141 1C14.6581 0.244 13.3421 0.244 12.5861 1L1.00006 12.586C0.622062 12.964 0.414062 13.466 0.414062 14ZM14.0001 2.414L15.5861 4L12.0001 7.586L10.4141 6L14.0001 2.414Z" fill="#FFF" /><defs><linearGradient id="paint_create_linear" x1="0.500008" y1={10} x2="19.5" y2={10} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
  )
}

const DemoSvg4 = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="SignUpLayout_iconMyNft__zXPnM"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 6C1.5 4.34315 2.84315 3 4.5 3H9.48713C10.8441 3 11.9906 3.90091 12.3612 5.13723C11.662 5.2925 11.0157 5.69721 10.5678 6.32682L4.70522 14.5689C3.74486 15.919 4.06083 17.7921 5.41097 18.7524L5.91995 19.1145H4.5C2.84315 19.1145 1.5 17.7713 1.5 16.1145V6ZM17.2471 5.62124C15.897 4.66088 14.024 4.97686 13.0636 6.327L7.20098 14.5691C6.24062 15.9192 6.5566 17.7922 7.90673 18.7526L11.9706 21.6433C13.3208 22.6036 15.1938 22.2877 16.1542 20.9375L22.0168 12.6955C22.9772 11.3453 22.6612 9.47229 21.3111 8.51193L17.2471 5.62124Z" fill="#FFF" /><defs><linearGradient id="paint_create_linear" x1="0.500008" y1={10} x2="19.5" y2={10} gradientUnits="userSpaceOnUse"><stop stopColor="#1199FA" /><stop offset={1} stopColor="#11D0FA" /></linearGradient></defs></svg>
  )
}

const LeftArrowSvg = () => {
  return (
      <svg width={5} height={10} fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M0 5l5 5V0L0 5z" fill="#1199fa" /><defs><linearGradient id="prefix__paint0_linear_10508:222254" x1="{0}" y1="{5}" x2="{5}" y2="{5}" gradientUnits="userSpaceOnUse"><stop stopcolor="#1199FA" /><stop offset="{1}" stopcolor="#11D0FA" /></linearGradient></defs></svg>
  )
}

const SettingSvg = () => {
  return (
      <svg className='inline-block' width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75ZM7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M9.85658 0.900877C9.90626 0.528273 10.2241 0.25 10.6 0.25H13.5C13.8759 0.25 14.1937 0.528273 14.2434 0.900877L14.576 3.39523C15.1887 3.56423 15.7711 3.78961 16.3476 4.10178L18.35 2.6C18.6486 2.37606 19.0664 2.40575 19.3303 2.66967L21.3303 4.66967C21.5942 4.93359 21.6239 5.35141 21.4 5.65L19.9002 7.64972C20.229 8.2396 20.5067 8.87453 20.6994 9.52558L23.1025 9.85703C23.4736 9.90822 23.75 10.2254 23.75 10.6V13.5C23.75 13.8746 23.4736 14.1918 23.1025 14.243L20.7098 14.573C20.516 15.2677 20.2346 15.873 19.9082 16.4436L21.3906 18.3378C21.6243 18.6363 21.5984 19.0623 21.3303 19.3303L19.3303 21.3303C19.0664 21.5942 18.6486 21.6239 18.35 21.4L16.3697 19.9148C15.8223 20.2417 15.2058 20.5118 14.5744 20.6992L14.243 23.1025C14.1918 23.4736 13.8746 23.75 13.5 23.75H10.6C10.2254 23.75 9.90822 23.4736 9.85703 23.1025L9.52641 20.7054C8.91284 20.5364 8.32967 20.3108 7.75238 19.9982L5.75 21.5C5.45141 21.7239 5.03359 21.6942 4.76967 21.4303L2.76967 19.4303C2.51122 19.1719 2.47671 18.7648 2.68798 18.4665L4.10699 16.4632C3.77504 15.8697 3.4947 15.2302 3.30059 14.5744L0.897522 14.243C0.526421 14.1918 0.25 13.8746 0.25 13.5V10.6C0.25 10.2254 0.526421 9.90822 0.897522 9.85703L3.29021 9.52701C3.48396 8.83228 3.76541 8.22699 4.09177 7.6564L2.60937 5.76223C2.37573 5.46369 2.40161 5.03773 2.66967 4.76967L4.66967 2.76967C4.93359 2.50575 5.35141 2.47606 5.65 2.7L7.64972 4.19979C8.23888 3.87138 8.87298 3.59397 9.52319 3.4013L9.85658 0.900877ZM11.2566 1.75L10.9434 4.09912C10.9018 4.41107 10.6699 4.66387 10.3627 4.73214C9.5612 4.91025 8.73991 5.27199 7.9975 5.736C7.73469 5.90025 7.39793 5.88595 7.15 5.7L5.27038 4.29028L4.19991 5.36075L5.59063 7.13777C5.78511 7.38627 5.80324 7.72991 5.636 7.9975C5.16172 8.75635 4.81097 9.4694 4.63544 10.3471C4.57281 10.6602 4.3188 10.8993 4.00248 10.943L1.75 11.2537V12.8463L4.00248 13.157C4.313 13.1999 4.56414 13.4313 4.63214 13.7373C4.81025 14.5388 5.17199 15.3601 5.636 16.1025C5.79631 16.359 5.78685 16.6867 5.61202 16.9335L4.27779 18.8171L5.37038 19.9097L7.25 18.5C7.49793 18.3141 7.83469 18.2997 8.0975 18.464C8.81421 18.9119 9.53211 19.1833 10.3627 19.3679C10.6687 19.4359 10.9001 19.687 10.943 19.9975L11.2537 22.25H12.8463L13.157 19.9975C13.1999 19.687 13.4313 19.4359 13.7373 19.3679C14.543 19.1888 15.3493 18.8288 15.9641 18.3897C16.2301 18.1997 16.5885 18.2039 16.85 18.4L18.7296 19.8097L19.8001 18.7393L18.4094 16.9622C18.2149 16.7137 18.1968 16.3701 18.364 16.1025C18.8383 15.3437 19.189 14.6306 19.3646 13.7529C19.4272 13.4398 19.6812 13.2007 19.9975 13.157L22.25 12.8463V11.2537L19.9975 10.943C19.687 10.9001 19.4359 10.6687 19.3679 10.3627C19.1897 9.5612 18.828 8.73991 18.364 7.9975C18.1997 7.73469 18.2141 7.39793 18.4 7.15L19.8097 5.27038L18.7296 4.19028L16.85 5.6C16.6021 5.78595 16.2653 5.80025 16.0025 5.636C15.2858 5.18805 14.5679 4.91672 13.7373 4.73214C13.4301 4.66387 13.1982 4.41107 13.1566 4.09912L12.8434 1.75H11.2566Z" fill="white" /></svg>
  )
}

const ScannerSvg = () => {
  return (
      <svg className='inline-block' width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width={20} height={20} rx="2.5" fill="white" fillOpacity="0.1" /><path fillRule="evenodd" clipRule="evenodd" d="M8.98779 5.46094C8.98779 5.20205 9.19766 4.99219 9.45654 4.99219H10.5978C10.8567 4.99219 11.0666 5.20205 11.0666 5.46094C11.0666 5.71982 10.8567 5.92969 10.5978 5.92969H9.45654C9.19766 5.92969 8.98779 5.71982 8.98779 5.46094Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M8.98779 7.17188C8.98779 6.91299 9.19766 6.70312 9.45654 6.70312H10.5978C10.8567 6.70312 11.0666 6.91299 11.0666 7.17188C11.0666 7.43076 10.8567 7.64062 10.5978 7.64062H9.45654C9.19766 7.64062 8.98779 7.43076 8.98779 7.17188Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M9.45654 3.28125C9.71543 3.28125 9.92529 3.49112 9.92529 3.75V5.40489C9.92529 5.66377 9.71543 5.87364 9.45654 5.87364C9.19766 5.87364 8.98779 5.66377 8.98779 5.40489V3.75C8.98779 3.49112 9.19766 3.28125 9.45654 3.28125Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M3.28125 9.46094C3.28125 9.20205 3.49112 8.99219 3.75 8.99219H4.8913C5.15019 8.99219 5.36005 9.20205 5.36005 9.46094C5.36005 9.71982 5.15019 9.92969 4.8913 9.92969H3.75C3.49112 9.92969 3.28125 9.71982 3.28125 9.46094Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M6.13477 10.0312C6.13477 9.77237 6.34463 9.5625 6.60352 9.5625H10.0274C10.2863 9.5625 10.4962 9.77237 10.4962 10.0312C10.4962 10.2901 10.2863 10.5 10.0274 10.5H6.60352C6.34463 10.5 6.13477 10.2901 6.13477 10.0312Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M8.98779 16.3047C8.98779 16.0458 9.19766 15.8359 9.45654 15.8359H10.5978C10.8567 15.8359 11.0666 16.0458 11.0666 16.3047C11.0666 16.5636 10.8567 16.7734 10.5978 16.7734H9.45654C9.19766 16.7734 8.98779 16.5636 8.98779 16.3047Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M10.0273 9.73438C10.2862 9.73438 10.4961 9.94424 10.4961 10.2031V11.7439C10.4961 12.0028 10.2862 12.2126 10.0273 12.2126C9.76846 12.2126 9.55859 12.0028 9.55859 11.7439V10.2031C9.55859 9.94424 9.76846 9.73438 10.0273 9.73438Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M11.7393 11.8438C11.9981 11.8438 12.208 12.0536 12.208 12.3125V14.0245C12.208 14.2833 11.9981 14.4932 11.7393 14.4932C11.4804 14.4932 11.2705 14.2833 11.2705 14.0245V12.3125C11.2705 12.0536 11.4804 11.8438 11.7393 11.8438Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M16.3042 14.125C16.5631 14.125 16.7729 14.3349 16.7729 14.5938V16.3057C16.7729 16.5646 16.5631 16.7745 16.3042 16.7745C16.0453 16.7745 15.8354 16.5646 15.8354 16.3057V14.5938C15.8354 14.3349 16.0453 14.125 16.3042 14.125Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M9.45654 13.5547C9.71543 13.5547 9.92529 13.7646 9.92529 14.0234V16.306C9.92529 16.5649 9.71543 16.7748 9.45654 16.7748C9.19766 16.7748 8.98779 16.5649 8.98779 16.306V14.0234C8.98779 13.7646 9.19766 13.5547 9.45654 13.5547Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M12.8804 14.6953C13.1393 14.6953 13.3491 14.9052 13.3491 15.1641V16.3054C13.3491 16.5643 13.1393 16.7741 12.8804 16.7741C12.6215 16.7741 12.4116 16.5643 12.4116 16.3054V15.1641C12.4116 14.9052 12.6215 14.6953 12.8804 14.6953Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M16.3042 11.6719C16.5631 11.6719 16.7729 11.8817 16.7729 12.1406V12.9395C16.7729 13.1984 16.5631 13.4083 16.3042 13.4083C16.0453 13.4083 15.8354 13.1984 15.8354 12.9395V12.1406C15.8354 11.8817 16.0453 11.6719 16.3042 11.6719Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M4.8916 8.99219C5.15049 8.99219 5.36035 9.20205 5.36035 9.46094V10.6022C5.36035 10.8611 5.15049 11.071 4.8916 11.071C4.63272 11.071 4.42285 10.8611 4.42285 10.6022V9.46094C4.42285 9.20205 4.63272 8.99219 4.8916 8.99219Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M6.60352 8.99219C6.8624 8.99219 7.07227 9.20205 7.07227 9.46094V10.0316C7.07227 10.2905 6.8624 10.5003 6.60352 10.5003C6.34463 10.5003 6.13477 10.2905 6.13477 10.0316V9.46094C6.13477 9.20205 6.34463 8.99219 6.60352 8.99219Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M12.4116 9.46094C12.4116 9.20205 12.6215 8.99219 12.8804 8.99219H14.9347C15.1936 8.99219 15.4035 9.20205 15.4035 9.46094V10.6022C15.4035 10.8611 15.1936 11.071 14.9347 11.071C14.6758 11.071 14.466 10.8611 14.466 10.6022V9.92969H12.8804C12.6215 9.92969 12.4116 9.71982 12.4116 9.46094Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M11.2705 12.3125C11.2705 12.0536 11.4804 11.8438 11.7393 11.8438H14.0219C14.2808 11.8438 14.4906 12.0536 14.4906 12.3125V13.1685C14.4906 13.4274 14.2808 13.6372 14.0219 13.6372C13.763 13.6372 13.5531 13.4274 13.5531 13.1685V12.7812H11.7393C11.4804 12.7812 11.2705 12.5714 11.2705 12.3125Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M14.4658 10.5938C14.4658 10.3349 14.6757 10.125 14.9346 10.125H16.3041C16.563 10.125 16.7729 10.3349 16.7729 10.5938C16.7729 10.8526 16.563 11.0625 16.3041 11.0625H14.9346C14.6757 11.0625 14.4658 10.8526 14.4658 10.5938Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M14.1235 16.3047C14.1235 16.0458 14.3334 15.8359 14.5923 15.8359H16.3042C16.5631 15.8359 16.773 16.0458 16.773 16.3047C16.773 16.5636 16.5631 16.7734 16.3042 16.7734H14.5923C14.3334 16.7734 14.1235 16.5636 14.1235 16.3047Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M12.4116 4.375C12.4116 3.77094 12.9013 3.28125 13.5054 3.28125H15.6793C16.2833 3.28125 16.773 3.77094 16.773 4.375V6.54891C16.773 7.15297 16.2833 7.64266 15.6793 7.64266H13.5054C12.9013 7.64266 12.4116 7.15297 12.4116 6.54891V4.375ZM13.5054 4.21875C13.4191 4.21875 13.3491 4.28871 13.3491 4.375V6.54891C13.3491 6.63521 13.4191 6.70516 13.5054 6.70516H15.6793C15.7656 6.70516 15.8355 6.63521 15.8355 6.54891V4.375C15.8355 4.28871 15.7656 4.21875 15.6793 4.21875H13.5054Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M3.28125 4.375C3.28125 3.77094 3.77094 3.28125 4.375 3.28125H6.54891C7.15297 3.28125 7.64266 3.77094 7.64266 4.375V6.54891C7.64266 7.15297 7.15297 7.64266 6.54891 7.64266H4.375C3.77094 7.64266 3.28125 7.15297 3.28125 6.54891V4.375ZM4.375 4.21875C4.28871 4.21875 4.21875 4.28871 4.21875 4.375V6.54891C4.21875 6.63521 4.28871 6.70516 4.375 6.70516H6.54891C6.63521 6.70516 6.70516 6.63521 6.70516 6.54891V4.375C6.70516 4.28871 6.63521 4.21875 6.54891 4.21875H4.375Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M3.28125 13.5078C3.28125 12.9038 3.77094 12.4141 4.375 12.4141H6.54891C7.15297 12.4141 7.64266 12.9038 7.64266 13.5078V15.6817C7.64266 16.2858 7.15297 16.7755 6.54891 16.7755H4.375C3.77094 16.7755 3.28125 16.2858 3.28125 15.6817V13.5078ZM4.375 13.3516C4.28871 13.3516 4.21875 13.4215 4.21875 13.5078V15.6817C4.21875 15.768 4.28871 15.838 4.375 15.838H6.54891C6.63521 15.838 6.70516 15.768 6.70516 15.6817V13.5078C6.70516 13.4215 6.63521 13.3516 6.54891 13.3516H4.375Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M5 0H2.5C1.11929 0 0 1.11929 0 2.5V4.375H0.625V2.5C0.625 1.46447 1.46447 0.625 2.5 0.625H5V0ZM5 19.375H2.5C1.46447 19.375 0.625 18.5355 0.625 17.5V15.625H0V17.5C0 18.8807 1.11929 20 2.5 20H5V19.375ZM15.625 20V19.375H17.5C18.5355 19.375 19.375 18.5355 19.375 17.5V15.625H20V17.5C20 18.8807 18.8807 20 17.5 20H15.625ZM15.625 0.625V0H17.5C18.8807 0 20 1.11929 20 2.5V4.375H19.375V2.5C19.375 1.46447 18.5355 0.625 17.5 0.625H15.625Z" fill="white" /></svg>
  )
}

const ForgetPasswordSvg = () => {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.00008 1.68732C4.51512 1.68732 1.69 4.51244 1.69 7.9974C1.69 11.4824 4.51512 14.3075 8.00008 14.3075C11.485 14.3075 14.3102 11.4824 14.3102 7.9974C14.3102 4.51244 11.485 1.68732 8.00008 1.68732ZM0.666748 7.9974C0.666748 3.94731 3.94999 0.664062 8.00008 0.664062C12.0502 0.664062 15.3334 3.94731 15.3334 7.9974C15.3334 12.0475 12.0502 15.3307 8.00008 15.3307C3.94999 15.3307 0.666748 12.0475 0.666748 7.9974Z" fill="#A0A9BE" /><path fillRule="evenodd" clipRule="evenodd" d="M8.00008 6.92763C8.28265 6.92763 8.51171 7.15669 8.51171 7.43926V11.4082C8.51171 11.6908 8.28265 11.9199 8.00008 11.9199C7.71752 11.9199 7.48845 11.6908 7.48845 11.4082V7.43926C7.48845 7.15669 7.71752 6.92763 8.00008 6.92763Z" fill="#A0A9BE" /><path d="M8.68225 5.26871C8.68225 5.64547 8.37683 5.95088 8.00008 5.95088C7.62333 5.95088 7.31791 5.64547 7.31791 5.26871C7.31791 4.89196 7.62333 4.58654 8.00008 4.58654C8.37683 4.58654 8.68225 4.89196 8.68225 5.26871Z" fill="#A0A9BE" /></svg>
  )
}

const HidePasswordSvg = () => {
  return (
  <svg width={22} height={17} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-test-id="undefined-eye-outline-barred"><path fillRule="evenodd" clipRule="evenodd" d="M2.98806 22.6474C2.54636 23.1009 1.81131 23.1194 1.34629 22.6886C0.88127 22.2578 0.862365 21.541 1.30407 21.0875L4.25587 18.0567C1.53332 16.2079 0 13.5596 0 11.75C0 7.87883 5.39998 2.52349 12 2.52349C14.3685 2.52349 16.3936 3.12717 17.8283 4.12137L21.0119 0.852574C21.4536 0.39906 22.1887 0.380623 22.6537 0.811393C23.1187 1.24216 23.1376 1.95902 22.6959 2.41253L6.95809 18.5712C6.93969 18.5915 6.92062 18.6111 6.90094 18.6299L2.98806 22.6474ZM5.87822 16.391L7.68888 14.5319C7.61735 14.4544 7.55567 14.3659 7.50671 14.2674C7.119 13.4872 6.91129 12.6336 6.89806 11.75C6.89806 8.91127 9.1772 6.57047 12 6.57047C12.9412 6.57047 13.8929 6.84991 14.6988 7.33452L16.2057 5.78736C15.1897 5.17833 13.7436 4.78859 12 4.78859C9.04662 4.78859 6.56478 5.90091 4.67381 7.77625C3.25644 9.18191 2.32258 10.9579 2.32258 11.75C2.32258 12.8616 3.58269 14.9505 5.87822 16.391ZM13.0351 9.04274L9.39383 12.7814C9.28456 12.443 9.22591 12.09 9.22052 11.7333C9.22064 10.1368 10.4876 8.83557 12 8.83557C12.3435 8.83557 12.7008 8.90993 13.0351 9.04274ZM20.1253 6.83204C19.6321 7.23185 19.5646 7.94591 19.9745 8.42694C21.0786 9.7224 21.6774 11.0228 21.6774 11.75C21.6774 12.5421 20.7436 14.3181 19.3262 15.7238C17.4352 17.5991 14.9534 18.7114 12 18.7114C10.9381 18.7114 10.1163 18.6059 9.42638 18.3703C8.82106 18.1636 8.15851 18.4746 7.94655 19.065C7.73458 19.6553 8.05346 20.3014 8.65878 20.5082C9.62827 20.8393 10.6978 20.9765 12 20.9765C18.6 20.9765 24 15.6212 24 11.75C24 10.4229 23.1822 8.64706 21.7607 6.9791C21.3507 6.49807 20.6186 6.43223 20.1253 6.83204ZM14.7805 11.6993C14.8092 11.0745 15.3519 10.5906 15.9926 10.6186C16.6333 10.6466 17.1295 11.1758 17.1008 11.8007C16.977 14.4973 14.7371 16.7971 12.0582 16.9281C11.4176 16.9594 10.8723 16.4784 10.8402 15.8537C10.808 15.229 11.3013 14.6972 11.9418 14.6658C13.401 14.5945 14.7093 13.2512 14.7805 11.6993Z" fill="white" /></svg>
  )
}


const registerPageDataArr=[
  {
    icon: <DemoSvg1 />,
    title:"Drops",
    description:"Purchase NFTs that are directly sold by top Creators",
  },
  {
    icon: <DemoSvg2 />,
    title:"Marketplace",
    description:"Bid on and auction off rare digital collectibles",
  },
  {
    icon: <DemoSvg3 />,
    title:"Create",
    description:"Mint your own creations into NFTs",
  },
  {
    icon: <DemoSvg4 />,
    title:"My NFTs",
    description:"A digital gallery to showcase your collection",
  },
]



const Login = () => {

  const notify = () => toast("Login Successfully !");

  const session = useSession();
  const router = useRouter();


  const [loginFormData, setLoginFormData] = useState({
    email:"",
    password:""
})


const submitHandler = (e) => {
    e.preventDefault();
    console.log('login form data  ',loginFormData)
    signIn("credentials", {
        email:loginFormData?.email,
        password:loginFormData?.password,
      });
    // notify()
    setLoginFormData({
      email:"",
      password:""
  })
}

const onChangeHandler = (e) => {
    setLoginFormData((prev)=> ({...prev,[e.target.name]: e.target.value}))
    console.log('e.target.value  ',e.target.value)
}

  if (session.status === "authenticated") {
    notify()
    setTimeout(() => {
      router?.push("/nft");
    }, 800);
  }


  return (
    <>
    <section className='w-full bg-[#0b1426] text-white'>
      <div className='w-full grid grid-cols-12'>
        
        <div className='min-h-screen col-span-12 xl:col-span-8'>
          <div className='w-full py-4 px-[1.875rem]'>
              <Link href="/nft" className='no-underline'><NavbarLogoOnLgSvg /></Link>
          </div>
          <div className="w-full mt-6 py-8 sm:py-12 px-4 sm:px-[5.6875rem] md:px-[8.25rem]">
            <div className='mb-6 text-base font-normal text-[#1199fa] flex items-center gap-1' onClick={()=> { router.back() } }>
                <LeftArrowSvg />
                Back
            </div>
            <div className="mt-6 border border-[#ffffff1a] rounded-sm p-4">
              <h1 className="text-center text-lg font-semibold">Sign Up or Log In to Crypto.com</h1>
              <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <div className="w-full">
                  <h3 className='text-sm font-semibold'>Enter your email and password manually</h3>
                  <div className="w-full">
                    <form className='my-1' onSubmit={submitHandler}>
                      <div className='mt-[1.625rem]'>
                        <CustomInputField
                        type="email"
                        name="email"
                        title="Email Address"
                        placeholder='Enter your email address'
                        value={loginFormData.email}
                        onChange={onChangeHandler}
                        required
                        />
                        
                      </div>
                      <div className='mt-[1.625rem]'>
                        <CustomInputField
                        type="password"
                        name="password"
                        title="Password"
                        placeholder='Enter your password'
                        value={loginFormData.password}
                        onChange={onChangeHandler}
                        required
                        />
                      </div>
                      <div className='mt-[1.8125rem]'></div>
                      <div className="mt-6">
                        <button className='min-w-[8rem] h-12 w-full navbarBtnbg text-white rounded font-semibold text-center py-2 px-6 outline-0' type='submit' >Login</button>
                      </div>
                      <div className="mt-6 flex gap-2 items-center">
                        <Link href="/nft/password/reset" className='no-underline' ><span className='text-[#1199fa]'>Forgot your password?</span></Link>
                        <ForgetPasswordSvg />
                      </div>
                    </form>
                  </div>
                  <div className="mt-6 text-base">
                    By clicking <span className="font-bold"> Next</span>, I hereby acknowledge that I agree to the <span className="text-[#1199fa]"> Crypto.com NFT Disclaimer </span> and I've read the  <span className="text-[#1199fa]"> Privacy Notice</span>
                  </div>
                </div>
                <div className="hidden sm:flex justify-end items-center pl-12 border-l border-l-[#ffffff1a]">
                  <div className='w-full'>
                      <h1 className='text-sm font-semibold'>Scan with <span className='text-[#1199fa]'>Crypto.com App</span> to log in</h1>
                      <div className='my-8'>
                        <div className='rounded-xl'>
                          <Image 
                          src="/assets/images/qr_scan_pic.png"
                          className='object-cover rounded-xl'
                          width={220}
                          height={220}
                          alt='qr code image'
                          />
                        </div>
                      </div>
                      <div className="mt-[1.8125rem]">
                        <p className="mb-2">1. Open Crypto.com App</p>
                        <p className="mb-2">2. Tap Settings 
                          <span className="mx-2">
                            <SettingSvg />
                          </span>
                          {">"} QR Code Scanner
                          <span className="mx-2">
                            <ScannerSvg />
                          </span>
                        </p>
                        <p className="mb-2">3. Scan the QR code above</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-wrap justify-between items-center'>
                <div className='my-3 sm:my-0 flex items-center gap-2'>
                  <span className=''>EN</span>
                  <DownArrowSvg />
                </div>
                <div className='my-3 sm:my-0 flex items-center gap-3'>
                  <Link href="#" className='no-underline text-sm text-[#b0b4b9] font-normal'>Help</Link>
                  <Link href="#" className='no-underline text-sm text-[#b0b4b9] font-normal'>Privacy</Link>
                  <Link href="#" className='no-underline text-sm text-[#b0b4b9] font-normal'>Terms</Link>
                </div>
            </div>
          </div>
        </div>

        <div className='min-h-screen col-span-12 xl:col-span-4 relative'>
          <div className='registerPageBgImg'>
            <div className='registerPageBgImgBgOverlay'>
              <div className='h-full p-6 sm:py-[3.125rem] sm:px-[6.25rem] md:pt-[9.375rem] md:mb-[3.125rem] md:px-[3.125rem]'>
                  <h1 className='mb-8 text-2xl sm:text-4xl md:text-[2.5rem] font-semibold'>A highly-curated platform for creating, collecting and trading unique NFTs</h1>
                  <div className='w-full h-fit'>
                    {
                      Array.isArray(registerPageDataArr) && registerPageDataArr.length>0 && registerPageDataArr?.map((item,i)=> (
                        <>
                          <div className='mb-8'>
                            <div className='flex gap-5 items-center'>
                              {item?.icon && item?.icon}
                              <h3 className='text-[1.25rem] font-medium'>{item?.title && item?.title}</h3>
                            </div>
                            <p className='mt-1.5 text-[#b0b4b9] text-base font-medium'>{item?.description && item?.description}</p>
                          </div>
                        </>
                      ))
                    }
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <ToastContainer />
    </>
  )
}

export default Login