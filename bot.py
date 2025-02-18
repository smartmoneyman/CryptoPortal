import requests

# Данные бота
TELEGRAM_BOT_TOKEN = "7615248017:AAFHDDQR0pjFaI4QLb0kF5rSCkdAk8tLvD8"
TELEGRAM_CHAT_ID = "125256836"
TELEGRAM_API_URL = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"

def send_telegram_signal(signal, ticker, price):
    message = f"""
    📢 *TradingView Alert!*
    🔹 *Сигнал:* {signal}
    🔹 *Тикер:* {ticker}
    💰 *Цена:* {price} USD
    """
    
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown"
    }

    response = requests.post(TELEGRAM_API_URL, json=payload)
    return response.json()

# Тестовое сообщение
send_telegram_signal("BUY", "AMD", "95.32")
