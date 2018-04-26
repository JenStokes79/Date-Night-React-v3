/**
 *
 * Entry point for all routes
 *
 */

import api_v1 from "./api_v1";
import page from "./page";
import signin from './signin';
import search from './search';
import wheelSearch from './wheelSearch'
import searchMovie from './searchMovie'
export default {
  api_v1,
  signin,
   page,
   search,
   wheelSearch,
   searchMovie
};
