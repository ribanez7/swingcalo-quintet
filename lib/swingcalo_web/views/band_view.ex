defmodule SwingcaloWeb.BandView do
  use SwingcaloWeb, :view

  def uniq_css(conn) do
    """
    <link rel="stylesheet" href="#{Routes.static_path(conn, "/css/band.css")}"/>
    """
    |> raw()
  end

  def uniq_js(conn) do
    """
    <script type="text/javascript" src="#{Routes.static_path(conn, "/js/about.js")}"></script>
    """
    |> raw()
  end

  def title() do
    gettext("La banda")
  end
end
