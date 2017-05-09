/**
 * Created by Ozodrukh on 5/6/17.
 */

export interface MenuItem {
  name: string;
  path?: string;
  /* By default every menu is enabled */
  enabled: true;
}

export interface MenuGroup extends MenuItem {
  menu: MenuItem[];
}

