
function Menu({items, opened = false}) {
  const list = items.map((item, index) => 
    <li key={index}><a href={item.href}>{item.title}</a></li>);
    return (
      <div className={opened ? "menu menu-open" : "menu"}>
        <div className="menu-toggle"><span></span></div>
        {opened && (
          <nav>
            <ul>
              {list}
            </ul>
          </nav>
        )}
      </div>
    )
}

