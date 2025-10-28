<!-- GAME SCREEN -->
<div id="game" class="screen hidden">
    <div id="game-sidebar">
    <div id="sidebar-header">
        <div id="game-title">Room: <span id="game-room-code"></span></div>
        <button id="leave-game-btn">Leave Game</button>
    </div>

    <div id="chat-section">
        <div id="chat-title">Game Chat</div>
        <div id="chat-messages"></div>
        <div id="chat-input-container">
            <input type="text" id="chat-input" placeholder="Type message..." maxlength="200" />
            <button id="send-chat-btn">➤</button>
        </div>
    </div>
    </div>

    <div id="game-area">
        <!-- <canvas id="game-canvas" width="1600" height="1200"></canvas> -->
    </div>
</div>

<style src="./styles/game.css"></style>