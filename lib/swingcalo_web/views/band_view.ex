defmodule SwingcaloWeb.BandView do
  use SwingcaloWeb, :view

  def uniq_css(conn) do
    """
    <link rel="stylesheet" href="#{Routes.static_path(conn, "/css/main_styles.css")}"/>
    <link rel="stylesheet" href="#{Routes.static_path(conn, "/css/responsive.css")}"/>
    """
    |> raw()
  end

  def uniq_js(conn) do
    """
    <script type="text/javascript" src="#{Routes.static_path(conn, "/js/custom.js")}"></script>
    """
    |> raw()
  end
end
