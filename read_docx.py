import zipfile
import xml.etree.ElementTree as ET
import sys

def read_docx(filename):
    try:
        doc = zipfile.ZipFile(filename)
        xml_content = doc.read('word/document.xml')
        doc.close()
        tree = ET.XML(xml_content)
        
        # Namespaces
        word_namespace = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        
        text = []
        for p in tree.iter(f'{word_namespace}p'):
            para_text = []
            for t in p.iter(f'{word_namespace}t'):
                if t.text:
                    para_text.append(t.text)
            if para_text:
                text.append(''.join(para_text))
                
        return '\n'.join(text)
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    print(read_docx(sys.argv[1]))
