import requests
import json

# 📌 Данные бота
TELEGRAM_BOT_TOKEN = "7615248017:AAFHDDQR0pjFaI4QLb0kF5rSCkdAk8tLvD8"
TELEGRAM_CHAT_ID = "125256836"
TELEGRAM_URL = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"

def send_telegram_signal(data):
    """Отправка сигнала в Telegram"""
    signal = data.get("signal", "NO SIGNAL")
    ticker = data.get("ticker", "UNKNOWN")
    price = data.get("price", "0.0")

    message = f"""
    📢 *TradingView Alert!*
    🔹 *Сигнал:* {signal}
    🔹 *Тикер:* {ticker}
    💰 *Цена:* {price} USD
    """

    payload = {"chat_id": TELEGRAM_CHAT_ID, "text": message, "parse_mode": "Markdown"}
    response = requests.post(TELEGRAM_URL, json=payload)
    return response.json()

# 📌 Читаем входные данные (Webhook от TradingView)
if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        data = json.loads(sys.argv[1])  # Получаем JSON из GitHub Webhook
        send_telegram_signal(data)
