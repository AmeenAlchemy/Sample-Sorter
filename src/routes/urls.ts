/* eslint-disable import/prefer-default-export */

export const urls = {
  home: "/",
  racks: {
    root: "/racks",
    testTubes: (rackId: number) => `/racks/${rackId}`,
  },
  accessDenied: "/access-denied",
}
