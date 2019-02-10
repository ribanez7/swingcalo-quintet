defmodule SwingcaloWeb.MediaController do
  use SwingcaloWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
