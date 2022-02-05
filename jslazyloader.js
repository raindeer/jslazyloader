// By Erik Rehn

class JsLazyLoader {
  constructor(script_url, onload_func) {
    this.script_url = script_url;
    this.onload_func = onload_func;

    this.loaded = false;
    this.triggered = false;

    window.addEventListener('scroll', this.on_load_triggered);
    window.addEventListener('mousemove', this.on_load_triggered);
  }

  on_load_triggered = e => {
    if (this.triggered) return;
    
    this.triggered = true;

    window.removeEventListener('scroll', this.on_load_triggered);
    window.removeEventListener('mousemove', this.on_load_triggered);

    let script_tag = document.createElement('script');
    script_tag.src = this.script_url;
    script_tag.defer = true;
    script_tag.onload = () => {
      this.loaded = true;
      this.onload_func();
    }
    document.body.appendChild(script_tag);
  }
}    
