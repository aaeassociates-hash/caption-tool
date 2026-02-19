async function generate() {
    const topic = document.getElementById("topic").value;
    const platform = document.getElementById("platform").value;
    const tone = document.getElementById("tone").value;
  
    document.getElementById("result").innerText = "Generating...";
  
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic, platform, tone })
    });
  
    const data = await response.json();
  
    document.getElementById("result").innerText =
      data.choices[0].message.content;
  }
  