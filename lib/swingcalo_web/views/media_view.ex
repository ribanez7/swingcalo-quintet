defmodule SwingcaloWeb.MediaView do
  use SwingcaloWeb, :view

  def uniq_css(conn) do
    """
    <link rel="stylesheet" href="#{Routes.static_path(conn, "/css/elements.css")}"/>
    <link rel="stylesheet" href="#{Routes.static_path(conn, "/css/elements_responsive.css")}"/>
    """
    |> raw()
  end

  def uniq_js(conn) do
    """
    <script type="text/javascript" src="#{Routes.static_path(conn, "/js/elements.js")}"></script>
    """
    |> raw()
  end
end
