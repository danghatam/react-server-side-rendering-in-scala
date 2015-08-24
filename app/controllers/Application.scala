package controllers

import play.api._
import play.api.libs.json.Json
import play.api.libs.ws.{WS}
import play.api.mvc._
import play.api.Play.current
import scala.concurrent.ExecutionContext.Implicits.global

class Application extends Controller {

  def index = Action.async {
    val data = Json.obj(
      "name" -> "Big Bear"
    )
    val url = "http://localhost:3000"
    val holder = WS.url(url)
    holder.post(data).map( rs => {
      val result = rs.body
      Ok(views.html.index(result))
    })
  }

}
