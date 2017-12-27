$ ->
  messages = $("#messages")
  newCluePanel = $(".new-clue-panel")
  flashPanel = $(".soup-flash")
  flashText = flashPanel.find(".text")

  flashPanel.find(".close-button").on "click", ->
    flashPanel.fadeOut(500)

  if messages.length > 0 && messages.data("soup-state") != "finished"
    scroll_to_bottom = ->
      messages.animate({ scrollTop: messages.prop("scrollHeight"), 500 })

    scroll_to_bottom()

    App.global_soup = App.cable.subscriptions.create {
     channel: "SoupsChannel",
     soup_id: messages.data('soup-id')
    },
    connected: ->
      console.log "connected"

    disconnected: ->
      console.log "disconnected"

    received: (data) ->
      console.log "received"
      appendDataByType(data)

    send_message: (message, soup_id) ->
      @perform("send_message", message: message, soup_id: soup_id)

    send_clue: (clue, soup_id) ->
      @perform("send_clue", clue: clue, soup_id: soup_id)

    $(document).on "submit", "#new_message", (e) ->
      $this = $(this)
      textarea = $this.find("#message_body")
      message = textarea.val()
      e.preventDefault()

      if message.length > 0
        App.global_soup.send_message message, messages.data('soup-id')
        textarea.val("")
        return false

    $("#new_clue").submit (e) ->
      $this = $(this)
      textarea  = $this.find("input[name='clue[clue]']")
      clue = textarea.val()

      if clue.length > 0
        e.preventDefault()
        App.global_soup.send_clue clue, messages.data('soup-id')
        closeCluePanel(textarea)
        return false

    closeCluePanel = (textarea) ->
      newCluePanel.fadeOut(500)
      window.newClueRevealState = "hidden"
      textarea.val("")

    appendDataByType = (data) ->
      if data.type == "message"
        console.log $("#new_message").find("input[type='submit']")
        $("#new_message").find("input[type='submit']").prop("disabled", false)
        messages.append(data.content)
        scroll_to_bottom()
      else if data.type == "clue"
        $(".clue-panel ul").append(data.content)
        displayClueFlash()
      else if data.type == "soup"
        displaySoupClosedFlash()
      else if data.type == "appearance"
        console.log data
        displaySoupOwnerAppearance(data.content)

    displayClueFlash = ->
      clearFlashText()
      appendTextAndFadeIn("已新增線索")
      setTimeout ->
        flashPanel.fadeOut(500)
      , 5000

    displaySoupClosedFlash = ->
      clearFlashText()
      appendTextAndFadeIn("此鍋湯已完成，湯主關湯啦！")
      $("#new_message").remove()

    displaySoupOwnerAppearance = (content) ->
      clearFlashText()
      if content.appearance == "appear"
        appendTextAndFadeIn("湯主回來囉，繼續煮湯吧！")
        appendSoupForm(content.form)
      else if content.appearance == "disappear"
        appendTextAndFadeIn("湯主目前不在，此鍋湯將暫停留言！")
        $("#new_message").remove()

    appendTextAndFadeIn = (text) ->
      flashText.append(text)
      flashPanel.fadeIn(500)

    appendSoupForm = (form) ->
      if $("#new_message").length == 0
        $(".message-form-wrapper").append(form)

    clearFlashText = ->
      flashText[0].textContent = ""
