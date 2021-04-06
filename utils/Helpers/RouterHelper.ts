import Helper from "./Helper";

/*====================*/

class RouterHelper extends Helper {
  static compare(href: string, pathName: string) {
    const pathParts = pathName.split("/");

    return href.split("/").every((item, index) => {
      if (pathParts[index] === undefined) {
        return false;
      }

      if (!item && pathParts[index] === "cases") {
        return true;
      }

      const newItem = pathParts[index].replace(/\[.+]/, item);

      return newItem === item;
    });
  }
}

/*====================*/

export default RouterHelper;
