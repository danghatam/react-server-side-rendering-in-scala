package controllers

import play.api._
import play.api.libs.json.Json
import play.api.libs.ws.{WS}
import play.api.mvc._
import play.api.Play.current
import scala.concurrent.ExecutionContext.Implicits.global

class Application extends Controller {

  var dataTest = Json.obj(
    "info" -> Json.obj(
      "name" -> "Dang Tam",
      "age"  -> "25",
      "career" -> "developer"
    ),
    "about" -> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit egestas accumsan.",
    "contact" -> Json.obj(
      "address" -> "TPHCM",
      "phone" -> "+84907404471",
      "email" -> "danghatam@gmail.com"
    )
  )

  def index(reactUrl: String) = Action.async {
    val url = "http://localhost:3000"
    val holder = WS.url(url)
      .withHeaders("Content-Type" -> "application/json")
      .withQueryString("reacturl" -> reactUrl, "data" -> Json.stringify(dataTest))
    holder.get.map( rs => {
      val result = rs.body
      Ok(views.html.index(result))
    })
  }
}
