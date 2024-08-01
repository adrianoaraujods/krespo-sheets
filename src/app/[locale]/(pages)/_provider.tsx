"use client";

import * as React from "react";

export default function PagesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navbarMenuIsOpen, setNavbarMenuIsOpen] = React.useState(false);
  const [loginDialogIsOpen, setLoginDialogIsOpen] = React.useState(false);
  const [searchBarIsOpen, setSearchBarIsOpen] = React.useState(false);

  return (
    <PagesProviderContext.Provider
      value={{
        navbarMenu: {
          open: navbarMenuIsOpen,
          setOpen: setNavbarMenuIsOpen,
        },
        loginDialog: {
          open: loginDialogIsOpen,
          setOpen: setLoginDialogIsOpen,
        },
        searchBar: {
          open: searchBarIsOpen,
          setOpen: setSearchBarIsOpen,
        },
      }}
    >
      {children}
    </PagesProviderContext.Provider>
  );
}

export const PagesProviderContext = React.createContext<{
  navbarMenu: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  loginDialog: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  searchBar: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
} | null>(null);

export function usePagesContext() {
  const context = React.useContext(PagesProviderContext);

  if (!context) throw "usePagesContext must be used within a PagesProvider";

  return context;
}
