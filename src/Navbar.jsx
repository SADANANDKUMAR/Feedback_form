
import React from "react";
 class Navbar extends React.Component {
    state = {
      links: [
        {
          id: 1,
          name: "Link1",
          to: "/cms",
          className: "side_nav_item"
        },
        {
          id: 2,
          name: "Link2",
          to: "/cms",
          className: "side_nav_item"
        },
        {
          id: 3,
          name: "Link3",
          to: "/cms",
          className: "side_nav_item"
        },
        {
          id: 4,
          name: "Link4",
          to: "/cms",
          className: "side_nav_item"
        }
      ],
      activeLink: null
    };
  
    handleClick = id => {
      this.setState({ activeLink: id });
    };
  
    render() {
      const { links, activeLink } = this.state;
  
      return (
        <div>
          {links.map(link => {
            return (
              <div key={link.id}>
                <ul>
                  <li
                    onClick={() => this.handleClick(link.id)}
                    className={
                      link.className +
                      (link.id === activeLink ? " active_item" : "")
                    }
                  >
                    {link.name} {link.id === activeLink && "active!"}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      );
    }
  }

  export default Navbar
