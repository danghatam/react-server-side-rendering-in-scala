package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    val url = "http://localhost:3000"
    val result = scala.io.Source.fromURL(url).mkString

    Ok(views.html.index(result))
  }

}
