import React, { useEffect, useState } from "react";

export default function Warning ({ user }) {

    return (
    <>
        <h1 className="alert alert-danger">Hey {user}, watch your wallet!!</h1>
    </>
    )
}