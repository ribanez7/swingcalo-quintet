defmodule SwingcaloWeb.ShowsView do
  use SwingcaloWeb, :view

  def uniq_css(conn) do
    """
    <link rel="stylesheet" href="#{Routes.static_path(conn, "/css/shows.css")}"/>
    """
    |> raw()
  end

  def uniq_js(conn) do
    """
    <script type="text/javascript" src="#{Routes.static_path(conn, "/js/menu.js")}"></script>
    """
    |> raw()
  end

  def title() do
    gettext("Espectáculos")
  end
end
