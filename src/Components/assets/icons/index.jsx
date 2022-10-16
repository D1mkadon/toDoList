import React from "react";
export const iconDefs ={
    plus:{
        className:"icon-plus",
        viewBox:"0 0 32 32",
        width: '1em',
        height: '1em',
        body: (
            <path fill="currentColor" d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
        )
    },
    minus:{
        className:"icon-minus",
        viewBox:"0 0 32 32",
        width: '1em',
        height: '1em',
        body: (
            <path fill="currentColor" d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
        )
    } ,
    checkmark:{
        className:"icon-checkmark",
        viewBox:"0 0 32 32",
        width: '1em',
        height: '1em',
        body: (
                <path fill="currentColor" d="M28.998 8.531l-2.134-2.134c-0.394-0.393-1.030-0.393-1.423 0l-12.795 12.795-6.086-6.13c-0.393-0.393-1.029-0.393-1.423 0l-2.134 2.134c-0.393 0.394-0.393 1.030 0 1.423l8.924 8.984c0.393 0.393 1.030 0.393 1.423 0l15.648-15.649c0.393-0.392 0.393-1.030 0-1.423z"></path>
        )
    }
}