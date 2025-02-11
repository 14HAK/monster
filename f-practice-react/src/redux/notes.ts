//* Folder Structure:
// src/
// ├── store.ts        // Redux store setup
// ├── hooks.ts        // Typed Redux hooks
// ├── api/
// │   ├── baseApi.ts  // RTK Query base API
// │
// ├── features/
// │   ├── auth/
// │   │   ├── authApi.ts  // Auth-related API endpoints
// │   │   ├── authSlice.ts // Auth slice for state management
// │
// ├── features/
// │   ├── cartSlice.ts // Cart slice for managing cart items

//-------------------------------------------------------------
//* src/api/baseApi.ts:
// // fetchBaseQuery is used to simplify API calls (similar to fetch but optimized for RTK Query).
// // RootState is imported to access the Redux store.
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { RootState } from "../store";

