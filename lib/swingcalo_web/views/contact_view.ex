defmodule SwingcaloWeb.ContactView do
  use SwingcaloWeb, :view

  def uniq_css(conn) do
    """
    <link rel="stylesheet" href="#{Routes.static_path(conn, "/css/contact.css")}"/>
    <link rel="stylesheet" href="#{Routes.static_path(conn, "/css/contact_responsive.css")}"/>
    """
    |> raw()
  end

  def uniq_js(conn) do
    """
    <script type="text/javascript" src="#{Routes.static_path(conn, "/js/contact.js")}"></script>
    """
    |> raw()
  end
end
